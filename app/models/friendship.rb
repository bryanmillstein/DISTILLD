class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true

  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id

  belongs_to :friend,
    class_name: "User",
    foreign_key: :friend_id

end
