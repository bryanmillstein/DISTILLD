class AddBackgroundPictureToUsers < ActiveRecord::Migration
  def self.up
    add_attachment :users, :background_picture
  end

  def self.down
    remove_attachment :users, :background_pictures
  end
end
