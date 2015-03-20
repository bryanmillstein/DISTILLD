class AddUserToWhiskys < ActiveRecord::Migration
  def self.up
    add_attachment :whiskys, :user
  end

  def self.down
    remove_attachment :whiskys, :user
  end
end
