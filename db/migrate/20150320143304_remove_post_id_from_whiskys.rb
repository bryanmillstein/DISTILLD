class RemovePostIdFromWhiskys < ActiveRecord::Migration
  def change
    change_table :whiskys do |t|
      t.remove :post_id
    end
  end
end
