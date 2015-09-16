class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :profile_id, null: false
      t.integer :liker_id, null: false
      t.timestamps null: false
    end

    add_index :likes, :profile_id
    add_index :likes, :liker_id
    add_index :likes, [:profile_id, :liker_id], unique: true
  end
end
