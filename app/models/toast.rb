class Toast < ActiveRecord::Base
  validates :post_id, :user_id, presence: true
  validates :user_id, uniqueness: true

  belongs_to :user
  belongs_to :post
end
