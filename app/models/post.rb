require 'action_view'

class Post < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :user_id, :whisky_id, presence: true

  belongs_to :user
  has_many :comments,
    class_name: "Comment",
    foreign_key: :post_id

  has_many :toasts,
    class_name: "Toast",
    foreign_key: :post_id

  belongs_to :whisky,
    class_name: "Whisky",
    foreign_key: :whisky_id

  has_many :toasters, through: :toasts, source: :user

  has_attached_file :picture, styles: { medium: "300" }
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


  def self.get_friends_posts(user, page_num)
    friends_ids = []
    user.friends.each do |friend|
      friends_ids << friend.id
    end

    Post.includes(:user, :whisky, :toasters, :toasts, comments: [:user]).where("user_id IN (?)", friends_ids).order(created_at: :desc).page(page_num).per(5)
  end

  def self.get_user_posts(user, page_num)
    Post.includes(:user, :toasts, :toasters, :whisky, comments: [:user]).where("user_id = (?)", user.id).order(created_at: :desc).page(page_num).per(5)
  end

  def self.get_places(user, placeId, page_num)
    friends_ids = []
    user.friends.each do |friend|
      friends_ids << friend.id
    end

    Post.includes(:user, :whisky, :toasters, :toasts, comments: [:user]).where("user_id IN (?)", friends_ids).where("place_id IN (?)", 'cat').order(created_at: :desc).page(1).per(5)
  end

  def time_ago
    time_ago_in_words(self.created_at)
  end

end
