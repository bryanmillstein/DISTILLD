class RemoveTypeColumnFromWhiskys < ActiveRecord::Migration
  def change
    change_table :whiskys do |t|
      t.remove :type
    end
  end
end
