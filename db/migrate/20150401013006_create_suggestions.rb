class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.string :body
      t.integer :user_id, null: false
      t.integer :recipient_id, null: false
      t.integer :whisky_id, null: false

      t.timestamps
    end
  end
end
