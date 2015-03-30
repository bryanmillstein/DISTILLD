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

ActiveRecord::Schema.define(version: 20150330215802) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "user_id",                 null: false
    t.text     "body"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.integer  "whisky_id"
    t.string   "place_id"
    t.string   "place_name"
    t.string   "place_formatted_address"
    t.integer  "rating"
  end

  create_table "toasts", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "user_name",                       null: false
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.string   "background_picture_file_name"
    t.string   "background_picture_content_type"
    t.integer  "background_picture_file_size"
    t.datetime "background_picture_updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

  create_table "whiskys", force: :cascade do |t|
    t.string   "name",              null: false
    t.string   "brand",             null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "user_file_name"
    t.string   "user_content_type"
    t.integer  "user_file_size"
    t.datetime "user_updated_at"
    t.string   "post_file_name"
    t.string   "post_content_type"
    t.integer  "post_file_size"
    t.datetime "post_updated_at"
    t.string   "style"
  end

end
