class RemoveStatusColumnFromFriendships < ActiveRecord::Migration
  def change
    change_table :friendships do |t|
      t.remove :status
    end
  end
end
