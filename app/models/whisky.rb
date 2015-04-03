class Whisky < ActiveRecord::Base
  validates :name, :style, :brand, presence: true
  self.table_name = "whiskys"

  belongs_to :post,
    class_name: "Post",
    foreign_key: :whisky_id

  has_many :suggestions,
    class_name: "Suggestion",
    foreign_key: :whisky_id

end
