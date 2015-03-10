class Post < ActiveRecord::Base
  validates :user_id, :drink, presence: true

  belongs_to :user
  
end
