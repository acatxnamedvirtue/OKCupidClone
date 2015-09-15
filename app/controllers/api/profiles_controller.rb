class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile.all
    render json: @profiles
  end

  def show
    @profile = Profile.find(params[:id])
    render json: @profile
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
    params.require(:profile).permit(:self_summary, :what_im_doing,
      :im_really_good_at, :what_im_doing, :im_really_good_at, :favorites,
      :six_things, :friday_night, :message_me_if, :orientation, :ethnicity,
      :height, :body_type, :diet, :smokes, :drinks, :drugs, :religion, :sign,
      :education, :job, :income, :status, :type, :offspring, :pets, :speaks)
  end
end
