class Post < ActiveRecord::Base
  validates :user_id, :drink, presence: true

  belongs_to :user
  has_many :comments
  has_many :toasts
  has_many :toasters, through: :toasts, source: :user


  def self.get_friends_posts(current_user)
    friends = current_user.friends.includes(posts: [:comments, :user, :toasts])
    friends_posts = []
    friends.each do |friend|
      friend.posts.each do |post|
        friends_posts << post
      end
    end
    return friends_posts
  end

end
