class Question < ActiveRecord::Base
  validates :title, presence: true

  has_many :question_choices,
  class_name: 'QuestionChoice',
  foreign_key: :question_id,
  primary_key: :id

  has_many :question_answers,
  class_name: 'QuestionAnswer',
  foreign_key: :question_id,
  primary_key: :id
end
