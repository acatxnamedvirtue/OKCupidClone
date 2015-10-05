class QuestionChoice < ActiveRecord::Base
  validates :question_id, :body, presence: true

  belongs_to :question,
  class_name: 'Question',
  foreign_key: :question_id,
  primary_key: :id

  has_many :question_answers,
  class_name: 'QuestionAnswer',
  foreign_key: :question_choice_id,
  primary_key: :id
end
