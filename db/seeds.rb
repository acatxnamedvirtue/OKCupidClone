# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
password = BCrypt::Password.create("123456")

users = User.create([
  { username: 'Chad', email: 'chad@nyu.edu', password_digest: BCrypt::Password.create('123456') },
  { username: 'Tyler', email: 'tyler@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Trish', email: 'trish@nyu.edu', password_digest: BCrypt::Password.create('123456') },
  { username: 'Adam', email: 'adam@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Lexi', email: 'lexi@gmail.com', password_digest: BCrypt::Password.create('123456') },
  { username: 'Hannah', email: 'hannah@gmail.com', password_digest: BCrypt::Password.create('123456') },
  { username: 'Liz', email: 'liz@gmail.com', password_digest: BCrypt::Password.create('123456') },
  { username: 'Austin', email: 'austin@embryriddle.edu', password_digest: BCrypt::Password.create('123456') },
  { username: 'Logan', email: 'logan@whoknows.com', password_digest: BCrypt::Password.create('123456') },
  { username: 'Carl', email: 'carl@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Conz', email: 'conz@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Jonathan', email: 'jonathan@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Tommy', email: 'tommy@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Ariel', email: 'ariel@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Chris', email: 'chris@aa.io', password_digest: BCrypt::Password.create('123456') },
  { username: 'Erika', email: 'erika@fsu.edu', password_digest: BCrypt::Password.create('123456') }
  ])

profiles = Profile.create([
  { user_id: 1 },
  { user_id: 2 },
  { user_id: 3 },
  { user_id: 4 },
  { user_id: 5 },
  { user_id: 6 },
  { user_id: 7 },
  { user_id: 8 },
  { user_id: 9 },
  { user_id: 10 },
  { user_id: 11 },
  { user_id: 12 },
  { user_id: 13 },
  { user_id: 14 },
  { user_id: 15 },
  { user_id: 16 }
  ])


  # create_table "profiles", force: :cascade do |t|
  #   t.integer  "user_id",           null: false
  #   t.string   "self_summary"
  #   t.string   "what_im_doing"
  #   t.string   "im_really_good_at"
  #   t.string   "favorites"
  #   t.string   "six_things"
  #   t.string   "friday_night"
  #   t.string   "message_me_if"
  #   t.string   "orientation"
  #   t.string   "ethnicity"
  #   t.string   "height"
  #   t.string   "body_type"
  #   t.string   "diet"
  #   t.string   "smokes"
  #   t.string   "drinks"
  #   t.string   "drugs"
  #   t.string   "religion"
  #   t.string   "sign"
  #   t.string   "education"
  #   t.string   "job"
  #   t.string   "income"
  #   t.string   "status"
  #   t.string   "relationship_type"
  #   t.string   "offspring"
  #   t.string   "pets"
  #   t.string   "speaks"
  #   t.datetime "created_at",        null: false
  #   t.datetime "updated_at",        null: false
  #   t.string   "thinking_about"
  # end
