class Like < ActiveRecord::Base
  validates :profile_id, :liker_id, presence: true
  validates :profile_id, uniqueness: { scope: :liker_id }

  belongs_to :liker,
  class_name: 'User',
  foreign_key: :liker_id,
  primary_key: :id

  belongs_to :profile,
  class_name: 'Profile',
  foreign_key: :profile_id,
  primary_key: :id
end
