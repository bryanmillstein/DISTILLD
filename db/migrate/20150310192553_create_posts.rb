class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :drink, null: false
      t.text :body

      t.timestamps
    end
  end
end
