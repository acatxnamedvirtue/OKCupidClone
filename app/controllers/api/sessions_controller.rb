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
end
