# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
Friendship.delete_all


u1 = User.create(email: "bryanmillstein@gmail.com", user_name: "bmillstein", password: "password")
u2 = User.create(email: "kevin@gmail.com", user_name: "kevingale", password: "password")
u3 = User.create(email: "bobby@gmail.com", user_name: "bobby", password: "password")
u4 = User.create(email: "james@gmail.com", user_name: "jamesbond", password: "password")


p1 = u1.posts.create(drink: "Whiskey", body: "Great after a long day.")
p2 = u1.posts.create(drink: "Scotch", body: "Best drink ever.")
p3 = u2.posts.create(drink: "Bourbon", body: "Delicious.")
p4 = u2.posts.create(drink: "Irish Whiskey", body: "Need more...")
p5 = u3.posts.create(drink: "James Bond", body: "Delicious.")
p6 = u4.posts.create(drink: "15 Year Scotch", body: "Best")

f1 = u1.friendships.create(friend_id: u2.id)
f2 = u1.friendships.create(friend_id: u3.id)
f3 = u1.friendships.create(friend_id: u4.id)
f4 = u2.friendships.create(friend_id: u1.id)
f5 = u3.friendships.create(friend_id: u1.id)
f6 = u4.friendships.create(friend_id: u1.id)

f7 = u2.friendships.create(friend_id: u4.id)
f8 = u4.friendships.create(friend_id: u2.id)
