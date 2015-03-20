class AddStyleColumnFromWhiskys < ActiveRecord::Migration
  def change
    add_column :whiskys, :style, :string

  end
end
