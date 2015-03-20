class AddPostToWhiskys < ActiveRecord::Migration
  def self.up
    add_attachment :whiskys, :post
  end

  def self.down
    remove_attachment :whiskys, :post
  end
end
