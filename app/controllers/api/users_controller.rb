class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.includes(:answered_questions, :authored_questions, :sent_messages, :received_messages, :likers, :liked_users, :likes)
      .find(params[:id])
  end

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.create_profile
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
