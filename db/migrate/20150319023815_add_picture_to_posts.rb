class AddPictureToPosts < ActiveRecord::Migration
  def self.up
    add_attachment :posts, :picture
  end

  def self.down
    remove_attachment :posts, :pictures
  end
end
