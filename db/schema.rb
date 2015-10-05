# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151005015540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.integer  "profile_id", null: false
    t.integer  "liker_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["liker_id"], name: "index_likes_on_liker_id", using: :btree
  add_index "likes", ["profile_id", "liker_id"], name: "index_likes_on_profile_id_and_liker_id", unique: true, using: :btree
  add_index "likes", ["profile_id"], name: "index_likes_on_profile_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id",    null: false
    t.integer  "recipient_id", null: false
    t.string   "title",        null: false
    t.string   "body",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "messages", ["recipient_id"], name: "index_messages_on_recipient_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id",                  null: false
    t.string   "self_summary"
    t.string   "what_im_doing"
    t.string   "im_really_good_at"
    t.string   "favorites"
    t.string   "six_things"
    t.string   "friday_night"
    t.string   "message_me_if"
    t.string   "orientation"
    t.string   "ethnicity"
    t.string   "height"
    t.string   "body_type"
    t.string   "diet"
    t.string   "smokes"
    t.string   "drinks"
    t.string   "drugs"
    t.string   "religion"
    t.string   "sign"
    t.string   "education"
    t.string   "job"
    t.string   "income"
    t.string   "status"
    t.string   "relationship_type"
    t.string   "offspring"
    t.string   "pets"
    t.string   "speaks"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "thinking_about"
    t.string   "profile_pic_file_name"
    t.string   "profile_pic_content_type"
    t.integer  "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
  end

  add_index "profiles", ["user_id"], name: "index_profiles_on_user_id", unique: true, using: :btree

  create_table "question_answers", force: :cascade do |t|
    t.integer  "question_id",        null: false
    t.integer  "question_choice_id", null: false
    t.integer  "user_id",            null: false
    t.integer  "importance",         null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "question_answers", ["question_choice_id"], name: "index_question_answers_on_question_choice_id", using: :btree
  add_index "question_answers", ["question_id", "user_id"], name: "index_question_answers_on_question_id_and_user_id", unique: true, using: :btree
  add_index "question_answers", ["question_id"], name: "index_question_answers_on_question_id", using: :btree
  add_index "question_answers", ["user_id"], name: "index_question_answers_on_user_id", using: :btree

  create_table "question_choices", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.string   "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "gender",          null: false
    t.string   "zip_code",        null: false
    t.string   "country",         null: false
    t.string   "month",           null: false
    t.string   "day",             null: false
    t.string   "year",            null: false
    t.string   "sex_orientation"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["provider"], name: "index_users_on_provider", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["uid"], name: "index_users_on_uid", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
