class Profile < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
  class_name: 'User',
  foreign_key: 'user_id',
  primary_key: :id

  has_many :likes,
  class_name: 'Likes',
  foreign_key: :profile_id,
  primary_key: :id

  has_many :likers,
  through: :likes,
  source: :liker
end
