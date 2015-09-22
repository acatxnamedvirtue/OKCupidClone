class AddOrientationGenderCountryZipCodeBirthdateToUsersModel < ActiveRecord::Migration
  def change
    add_column :users, :orientation, :string, null: false;
    add_column :users, :gender, :string, null: false;
    add_column :users, :zip_code, :string, null: false;
    add_column :users, :country, :string, null: false;
    add_column :users, :month, :string, null: false;
    add_column :users, :day, :string, null: false;
    add_column :users, :year, :string, null: false;
  end
end
