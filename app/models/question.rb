class Question < ActiveRecord::Base
  validates :author_id, :title, :body, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id,
  primary_key: :id

  has_many :question_choices,
  class_name: 'QuestionChoice',
  foreign_key: :question_id,
  primary_key: :id

  has_many :question_answers,
  class_name: 'QuestionAnswer',
  foreign_key: :question_id,
  primary_key: :id
end
