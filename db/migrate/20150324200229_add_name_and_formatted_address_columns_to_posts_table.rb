class AddNameAndFormattedAddressColumnsToPostsTable < ActiveRecord::Migration
  def change
    add_column :posts, :place_name, :string
    add_column :posts, :place_formatted_address, :string
  end
end
