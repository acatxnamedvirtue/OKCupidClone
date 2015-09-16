class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, uniqueness: true

  before_validation :ensure_session_token

  has_one :profile,
  class_name: 'Profile',
  foreign_key: :user_id,
  primary_key: :id

  has_many :likes,
  class_name: 'Likes',
  foreign_key: :liker_id,
  primary_key: :id

  has_many :liked_profiles,
  through: :likes,
  source: :profile

  attr_reader :password

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) ||
      User.find_by(email: username_or_email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
