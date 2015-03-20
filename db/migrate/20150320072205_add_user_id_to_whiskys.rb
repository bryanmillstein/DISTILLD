class AddUserIdToWhiskys < ActiveRecord::Migration
  def change
    add_column :whiskys, :user_id, :integer
  end
end
