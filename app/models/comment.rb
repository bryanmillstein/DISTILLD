require 'action_view'

class Comment < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  validates :user_id, :post_id, :body, presence: true

  belongs_to :post
  belongs_to :user

  def time_ago
    time_ago_in_words(self.created_at)
  end

end
