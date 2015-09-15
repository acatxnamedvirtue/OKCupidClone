class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :self_summary
      t.string :what_im_doing
      t.string :im_really_good_at
      t.string :favorites
      t.string :six_things
      t.string :friday_night
      t.string :message_me_if

      t.string :orientation
      t.string :ethnicity
      t.string :height
      t.string :body_type
      t.string :diet
      t.string :smokes
      t.string :drinks
      t.string :drugs
      t.string :religion
      t.string :sign
      t.string :education
      t.string :job
      t.string :income
      t.string :status
      t.string :type
      t.string :offspring
      t.string :pets
      t.string :speaks

      t.timestamps null: false
    end

    add_index :profiles, :user_id, unique: true
  end
end
