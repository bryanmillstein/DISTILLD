require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :user_id, :drink, presence: true

  belongs_to :user
  has_many :comments
  has_many :toasts
  has_many :toasters, through: :toasts, source: :user

  has_attached_file :picture, styles: { medium: "50x50<" }
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


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

  def time_ago
    time_ago_in_words(self.created_at)
  end

end
