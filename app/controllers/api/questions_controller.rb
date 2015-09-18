class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render json: @questions
  end

  def show
    @question = Question.includes(:author, :question_choices, :question_answers).find(params[:id])
  end

  def create
    @question = current_user.authored_questions.new(question_params)

    if @question.save
      render json: @question
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end
end
