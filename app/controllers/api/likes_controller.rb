class Api::LikesController < ApplicationController
  def index
    @likes = Like.all.where("liker_id = ? OR profile_id = ?", current_user.id, current_user.profile.id)
    render json: @likes
  end

  def create
    @like = Like.new(like_params)

    if @like.save(like_params)
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    render json: @like
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :profile_id)
  end
end
