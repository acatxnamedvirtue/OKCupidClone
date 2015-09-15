class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username_or_email],
                                     params[:user][:password])
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username/email and/or password"]
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
