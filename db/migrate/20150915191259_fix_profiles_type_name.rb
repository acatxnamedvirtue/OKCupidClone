class FixProfilesTypeName < ActiveRecord::Migration
  def change
    rename_column :profiles, :type, :relationship_type
  end
end
