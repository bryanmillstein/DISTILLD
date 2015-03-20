class RemoveDrinkColumnFromPosts < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      t.remove :drink
    end
  end
end
