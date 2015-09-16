class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    @message = Message.includes(:sender, :recipient).find(params[:id])
    render json: @message
  end

  def create
    @message = current_user.sent_messages.new(message_params)

    if @message.save(message_params)
      render json: @message
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:sender_id, :recipient_id, :title, :body)
  end
end
