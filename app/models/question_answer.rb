class QuestionAnswer < ActiveRecord::Base
  validates :question_id, :question_choice_id, :user_id, :importance, presence: true

  belongs_to :question,
  class_name: 'Question',
  foreign_key: :question_id,
  primary_key: :id

  belongs_to :question_choice,
  class_name: 'QuestionChoice',
  foreign_key: :question_choice_id,
  primary_key: :id

  belongs_to :user,
  class_name: 'User',
  foreign_key: :user_id,
  primary_key: :id
end
