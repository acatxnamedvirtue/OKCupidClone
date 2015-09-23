class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = User.includes(:answered_questions, :authored_questions, :sent_messages, :received_messages, :likers, :liked_users, :likes)
        .find(current_user.id)
      render :show
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username_or_email],
                                    params[:user][:password])
    if @user.nil?
      head :unprocessable_entity
    else
      login!(@user)
      render :show
    end
  end

  def destroy
    logout!
    render json: {}
  end

  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    login!(user)
    if user.username == user.email
      redirect_to "#/users/#{user.id}/edit"
    else
      redirect_to ""
    end
  end

  protected
  def auth_hash
    request.env['omniauth.auth']
  end
end
