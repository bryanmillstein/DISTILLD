class AddWhiskyIdColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :whisky_id, :integer

  end
end
