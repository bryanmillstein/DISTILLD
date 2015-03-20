class Whisky < ActiveRecord::Base
  validates :name, :type, :brand, presence: true

  belongs_to :user

  belongs_to :post

end
