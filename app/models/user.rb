class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, :sex_orientation,
    :gender, :month, :day, :year, :zip_code, :country, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, uniqueness: true

  before_validation :ensure_session_token

  has_many :authored_questions,
  class_name: 'Question',
  foreign_key: :author_id,
  primary_key: :id

  has_many :answered_questions,
  through: :question_answers,
  source: :question

  has_many :authored_question_choices,
  class_name: 'QuestionChoice',
  foreign_key: :author_id,
  primary_key: :id

  has_many :question_answers,
  class_name: 'QuestionAnswer',
  foreign_key: :user_id,
  primary_key: :id

  has_one :profile,
  class_name: 'Profile',
  foreign_key: :user_id,
  primary_key: :id

  has_many :sent_messages,
  class_name: 'Message',
  foreign_key: :sender_id,
  primary_key: :id

  has_many :received_messages,
  class_name: 'Message',
  foreign_key: :recipient_id,
  primary_key: :id

  # like instances where the current user is the liker
  has_many :likes,
  class_name: 'Like',
  foreign_key: :liker_id,
  primary_key: :id

  # profiles that the current user has liked
  has_many :liked_profiles,
  through: :likes,
  source: :profile

  # users that the current user has liked
  has_many :liked_users,
  through: :liked_profiles,
  source: :user

  # users who have liked the current user's profile
  has_many :likers,
  through: :profile,
  source: :likers


  attr_reader :password

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) ||
      User.find_by(email: username_or_email)
    user && user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(provider: auth_hash[:provider], uid: auth_hash[:uid])

    unless user
      user = User.create!(
        username: auth_hash[:info][:name],
        provider: auth_hash[:provider],
        uid: auth_hash[:uid],
        email: auth_hash[:info][:name],
        password: SecureRandom::urlsafe_base64,
        sex_orientation: "Bisexual",
        gender: "Female",
        month: "1",
        day: "1",
        year: "1990",
        zip_code: '10003',
        country: "United States"
        )

      user.create_profile
    end

    user
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
