class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.includes(:sent_messages, :received_messages, :likers, :liked_users, :likes)
      .find(params[:id])
    render 'show.json.jbuilder'
  end

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.create_profile
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
