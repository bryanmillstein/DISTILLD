class Post < ActiveRecord::Base
  validates :user_id, :drink, presence: true

  belongs_to :user,
    class: 'User',
    foreign_key: :user_id,
    inverse_of: :posts

end
