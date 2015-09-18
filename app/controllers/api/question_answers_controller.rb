class Api::QuestionAnswersController < ApplicationController
  def index
    @question_answer = QuestionAnswer.all
    render json: @question_answer
  end

  def show
    @question_answer = QuestionAnswer.find(params[:id])
    render json: @question_answer
  end

  def create
    @question_answer = QuestionAnswer.new(question_answer_params)

    if @question_answer.save
      render json: @question_answer
    else
      render json: @question_answer.errors.full_messages, status: 422
    end
  end

  private
  def question_answer_params
    params.require(:question_answer).permit(:user_id, :question_id, :question_choice_id, :importance)
  end
end
