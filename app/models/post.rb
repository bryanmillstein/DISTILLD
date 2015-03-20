require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :user_id, :drink, presence: true

  belongs_to :user
  has_many :comments,
    class_name: "Comment",
    foreign_key: :post_id

  has_many :toasts,
    class_name: "Toast",
    foreign_key: :post_id

  has_many :whiskys

  has_many :toasters, through: :toasts, source: :user

  has_attached_file :picture, styles: { medium: "50x50<" }
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


  def self.get_friends_posts(user, page_num)
    friends_ids = []
    user.friends.each do |friend|
      friends_ids << friend.id
    end

    Post.includes(:user, :toasters, :toasts, comments: [:user]).where("user_id IN (?)", friends_ids).order(created_at: :desc).page(page_num).per(5)
  end

  def time_ago
    time_ago_in_words(self.created_at)
  end

end
