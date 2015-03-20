class AddPostIdToWhiskys < ActiveRecord::Migration
  def change
    add_column :whiskys, :post_id, :integer
  end
end
