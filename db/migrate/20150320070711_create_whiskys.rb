class CreateWhiskys < ActiveRecord::Migration
  def change
    create_table :whiskys do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :brand, null: false

      t.timestamps
    end
  end
end
