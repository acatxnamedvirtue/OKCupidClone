class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
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

  def show
    @like = Like.find(params[:id])
    render json: @like
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy()
    render json: @like
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :profile_id)
  end
end
