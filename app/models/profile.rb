class Profile < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true
  has_attached_file :profile_pic, default_url: "missing.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  class_name: 'User',
  foreign_key: :user_id,
  primary_key: :id

  has_many :likes,
  class_name: 'Like',
  foreign_key: :profile_id,
  primary_key: :id

  has_many :likers,
  through: :likes,
  source: :liker
end
