class User < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:user_name, :email]

  validates :user_name, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :picture, styles: { medium: "100x100>", profile_pic: "256x256<", thumb: "32x32>" }, default_url: "user_default_:style.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

  has_attached_file :background_picture, styles: { medium: "880x200>"}
  validates_attachment_content_type :background_picture, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :posts
  has_many :whiskys
  has_many :comments
  has_many :toasts,
    class_name: 'Toast',
    foreign_key: :user_id

  has_many :friendships,
    class_name: "Friendship"

  has_many :friends, through: :friendships, source: :friend


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
