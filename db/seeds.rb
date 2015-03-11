# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all


u1 = User.create(email: "bryanmillstein@gmail.com", user_name: "bmillstein", password: "password")
u2 = User.create(email: "kevin@gmail.com", user_name: "kevingale", password: "password")


p1 = u1.posts.create(drink: "Whiskey", body: "Great after a long day.")
p2 = u1.posts.create(drink: "Scotch", body: "Best drink ever.")
p3 = u2.posts.create(drink: "Bourbon", body: "Delicious.")
p4 = u2.posts.create(drink: "Irish Whiskey", body: "Need more...")
