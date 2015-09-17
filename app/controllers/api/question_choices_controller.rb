class Api::QuestionChoicesController < ApplicationController
  def index
    @question_choices = QuestionChoice.all
    render json: @question_choices
  end

  def show
    @question_choice = QuestionChoice.find(params[:id])
    render json: @question_choice
  end

  def create
    @question_choice = current_user.authored_question_choices.new(question_choice_params)

    if @question_choice.save
      render json: @question_choice
    else
      render json: @question_choice.errors.full_messages, status: 422
    end
  end

  private
  def question_choice_params
    params.require(:question_choice).permit(:question_id, :body)
  end
end
