class Toast < ActiveRecord::Base
  validates :post_id, :user_id, presence: true
  # validates :user_id, uniqueness: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :post,
    class_name: "Post",
    foreign_key: :post_id
end
