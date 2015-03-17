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
Comment.delete_all
Toast.delete_all


u1 = User.create(email: "bryanmillstein@gmail.com", user_name: "Bryan Millstein", password: "password")
u2 = User.create(email: "james@gmail.com", user_name: "James Bond", password: "password")
u3 = User.create(email: "bobby@gmail.com", user_name: "bobby", password: "password")
u4 = User.create(email: "alice@gmail.com", user_name: "Alice", password: "password")


p1 = u1.posts.create(drink: "Whiskey", body: "Great after a long day.")
p2 = u1.posts.create(drink: "Scotch", body: "Best drink ever.")
p3 = u2.posts.create(drink: "Bourbon", body: "Delicious.")
p4 = u2.posts.create(drink: "Macallan", body: "Best")
p5 = u3.posts.create(drink: "Laphroaig", body: "Delicious.")
p6 = u4.posts.create(drink: "Irish Whiskey", body: "Need more...")

c1 = u2.comments.create(post_id: p1.id, body: "Amazing post.")
c1 = u3.comments.create(post_id: p1.id, body: "Radical post.")
c1 = u1.comments.create(post_id: p3.id, body: "Cool post.")
c2 = u2.comments.create(post_id: p5.id, body: "Cooler post.")
c3 = u3.comments.create(post_id: p4.id, body: "Coolest post.")
c4 = u4.comments.create(post_id: p5.id, body: "Fine.")
c5 = u3.comments.create(post_id: p6.id, body: "Coolest post.")


f1 = u1.friendships.create(friend_id: u2.id)
f2 = u1.friendships.create(friend_id: u3.id)
f4 = u2.friendships.create(friend_id: u1.id)
f5 = u3.friendships.create(friend_id: u1.id)
f6 = u4.friendships.create(friend_id: u1.id)
f7 = u2.friendships.create(friend_id: u4.id)
f8 = u4.friendships.create(friend_id: u2.id)

t1 = p3.toasts.create(user_id: u1.id)
