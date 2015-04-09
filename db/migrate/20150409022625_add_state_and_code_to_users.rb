class AddStateAndCodeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :state, :string
    add_column :users, :code, :string
  end
end
