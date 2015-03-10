class User < ActiveRecord::Base
  validates :user_name, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimun: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::Urlsafe_base64
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(value)
    @password = value
    self.password_digest = BCrypt::Password.create(value)
  end

  def is_password(password)
    BCrypt::Password.new(password_digest).is_password(password)
  end


  private

  def ensure_session_token
    self.session_token || self.class.generate_session_token
  end

end
