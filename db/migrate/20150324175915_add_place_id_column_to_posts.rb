class AddPlaceIdColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :place_id, :string
  end
end
