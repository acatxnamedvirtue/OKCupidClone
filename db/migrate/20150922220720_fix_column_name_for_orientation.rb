class FixColumnNameForOrientation < ActiveRecord::Migration
  def change
    remove_column :users, :orientation
    add_column :users, :sex_orientation, :string
  end
end
