class Suggestion < ActiveRecord::Base
  validates :user_id, :recipient_id, :whisky_id, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id

  belongs_to :recipient,
    class_name: 'User',
    foreign_key: :recipient_id

  belongs_to :whisky,
    class_name: "Whisky",
    foreign_key: :whisky_id

end
