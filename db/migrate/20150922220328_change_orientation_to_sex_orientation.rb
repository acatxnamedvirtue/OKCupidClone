class ChangeOrientationToSexOrientation < ActiveRecord::Migration
  def change
    remove_column :users, :orientation
    add_column :users, :orientation, :string
  end
end
