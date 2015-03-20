class RemoveUserIdFromWhiskys < ActiveRecord::Migration
  def change
    change_table :whiskys do |t|
      t.remove :user_id
    end
  end
end
