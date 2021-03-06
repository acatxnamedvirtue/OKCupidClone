class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile.includes(:user).all
  end

  def show
    @profile = Profile.includes(:user).find(params[:id])
  end

  def edit
    @profile = Profile.find(params[:id])
    render json: @profile
  end

  def update
    @profile = current_user.profile

    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def profile_params
    params.require(:profile).permit(:profile_pic, :self_summary, :what_im_doing,
      :im_really_good_at, :what_im_doing, :im_really_good_at, :favorites,
      :six_things, :friday_night, :message_me_if, :orientation, :ethnicity,
      :height, :body_type, :diet, :smokes, :drinks, :drugs, :religion, :sign,
      :education, :job, :income, :status, :relationship_type, :offspring, :pets, :speaks, :thinking_about)
  end
end
