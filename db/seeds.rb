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
Whisky.delete_all

d1 = Whisky.create!(name: "1608", style: "Irish", brand: "Bushmills")
d2 = Whisky.create!(name: "Rarest Vintage Reserve", style: "Irish", brand: "Jameson")
d3 = Whisky.create!(name: "Select Reserve Black Barrel", style: "Irish", brand: "Jameson")
d4 = Whisky.create!(name: "Greenore", style: "Irish", brand: "Cooley")
d5 = Whisky.create!(name: "1949", style: "Irish", brand: "Knappogue Castle")

d6 = Whisky.create!(name: "The Quarter Century", style: "Scotch", brand: "Glenmorangie")
d7 = Whisky.create!(name: "Extremely Rare", style: "Scotch", brand: "Glenmorangie")
d8 = Whisky.create!(name: "25-Year", style: "Scotch", brand: "Macallan")
d9 = Whisky.create!(name: "30-Year", style: "Scotch", brand: "Macallan")
d10 = Whisky.create!(name: "30-Year", style: "Scotch", brand: "Highland Park")
d11 = Whisky.create!(name: "40-Year", style: "Scotch", brand: "Highland Park")
d12 = Whisky.create!(name: "Laphroaig Quarter Cask", style: "Scotch", brand: "Laphroaig")
d13 = Whisky.create!(name: "40-Year", style: "Scotch", brand: "Laphroaig")
d14 = Whisky.create!(name: "Triple Cask 25 Year Old", style: "Scotch", brand: "Balvenie")
d15 = Whisky.create!(name: "The Balvenie Fifty", style: "Scotch", brand: "Balvenie")
d16 = Whisky.create!(name: "1937 Rare Collection", style: "Scotch", brand: "Glenfiddich")
d17 = Whisky.create!(name: "Millenium Reserve", style: "Scotch", brand: "Glenfiddich")
d18 = Whisky.create!(name: "Glenlivet 70yo", style: "Scotch", brand: "Glenlivet")
d19 = Whisky.create!(name: "XXV 25 Year Old", style: "Scotch", brand: "Glenlivet")
d20 = Whisky.create!(name: "Blue Label", style: "Scotch", brand: "Johnnie Walker")
d20 = Whisky.create!(name: "Platinum Label", style: "Scotch", brand: "Johnnie Walker")



d16 = Whisky.create!(name: "Jim Beam White", style: "Bourbon", brand: "Jim Beam")
d17 = Whisky.create!(name: "Jim Beam Black", style: "Bourbon", brand: "Jim Beam")
d18 = Whisky.create!(name: "Gentleman Jack", style: "Bourbon", brand: "Jack Daniel's")
d19 = Whisky.create!(name: "Old No. 7", style: "Bourbon", brand: "Jack Daniel's")
d20 = Whisky.create!(name: "Knob Creek", style: "Bourbon", brand: "Knob Creek")
d21 = Whisky.create!(name: "Knob Creek Single Barrel Reserve", style: "Bourbon", brand: "Knob Creek")
d22 = Whisky.create!(name: "Maker’s 46", style: "Bourbon", brand: "Maker's Mark")
d23 = Whisky.create!(name: "Maker's Mark Cask Strength Bourbon", style: "Bourbon", brand: "Maker's Mark")
d24 = Whisky.create!(name: "Seasoned Oak Finish", style: "Bourbon", brand: "Woodford Reserve")
d25 = Whisky.create!(name: "Sweet Mash 1838", style: "Bourbon", brand: "Woodford Reserve")
d26 = Whisky.create!(name: "Rare Breed", style: "Bourbon", brand: "Wild Turkey")
d27 = Whisky.create!(name: "Bulleit Bourbon 10 Year", style: "Bourbon", brand: "Bulleit Bourbon")
d28 = Whisky.create!(name: "Bulleit Rye Whisky", style: "Bourbon", brand: "Bulleit Bourbon")
d29 = Whisky.create!(name: "Four Roses Mariage Collection", style: "Bourbon", brand: "Four Roses")
d30 = Whisky.create!(name: "Hudson Baby Bourbon", style: "Bourbon", brand: "Hudson Baby Bourbon")

u1 = User.create!(email: "bryan@gmail.com", user_name: "Bryan Millstein", password: "password")
u2 = User.create!(email: "matthew@gmail.com", user_name: "Matthew Millstein", password: "password")
u3 = User.create!(email: "wendy@gmail.com", user_name: "Wendy Millstein", password: "password")
u4 = User.create!(email: "garrett@gmail.com", user_name: "Garrett Hays", password: "password")
u5 = User.create!(email: "taylor@gmail.com", user_name: "Taylor Garcia", password: "password")
u6 = User.create!(email: "scott@gmail.com", user_name: "Scott Booth", password: "password")
u7 = User.create!(email: "kevin@gmail.com", user_name: "Kevin Kashou", password: "password")


f1 = u1.friendships.create!({ friend_id: u2.id })
f1 = u2.friendships.create!({ friend_id: u1.id })

f2 = u1.friendships.create!({ friend_id: u3.id })
f2 = u3.friendships.create!({ friend_id: u1.id })

f3 = u1.friendships.create!({ friend_id: u4.id })
f3 = u4.friendships.create!({ friend_id: u1.id })

f4 = u1.friendships.create!({ friend_id: u5.id })
f4 = u5.friendships.create!({ friend_id: u1.id })




p1 = u5.posts.create!(whisky_id: d1.id, body: "Great after a long day.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p2 = u6.posts.create!(whisky_id: d2.id, body: "Best whisky_id ever.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p3 = u2.posts.create!(whisky_id: d3.id, body: "Delicious.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p4 = u2.posts.create!(whisky_id: d4.id, body: "Best", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p5 = u3.posts.create!(whisky_id: d5.id, body: "Delicious.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p6 = u4.posts.create!(whisky_id: d6.id, body: "Need more...", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p7 = u1.posts.create!(whisky_id: d7.id, body: "Great after a long day.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p8 = u1.posts.create!(whisky_id: d8.id, body: "Best whisky_id ever.", place_id: "ChIJUyBYF5pZwokRFbcKzOSr-Yo", place_name: "Cosi", place_formatted_address: "53 East 8th Street, New York, NY 10003, United States")
p9 = u2.posts.create!(whisky_id: d9.id, body: "Delicious.")
p10 = u2.posts.create!(whisky_id: d10.id, body: "Best")
p11 = u3.posts.create!(whisky_id: d11.id, body: "Delicious.")
p12 = u4.posts.create!(whisky_id: d12.id, body: "Need more...")
p13 = u7.posts.create!(whisky_id: d13.id, body: "Great after a long day.")
p14 = u7.posts.create!(whisky_id: d14.id, body: "Best whisky_id ever.")
p15 = u2.posts.create!(whisky_id: d15.id, body: "Delicious.")
p16 = u2.posts.create!(whisky_id: d16.id, body: "Best")
p17 = u3.posts.create!(whisky_id: d17.id, body: "Delicious.")
p18 = u4.posts.create!(whisky_id: d18.id, body: "Need more...")
p19 = u6.posts.create!(whisky_id: d19.id, body: "Great after a long day.")
p20 = u1.posts.create!(whisky_id: d12.id, body: "Best whisky_id ever.")
p21 = u4.posts.create!(whisky_id: d13.id, body: "Delicious.")
p22 = u3.posts.create!(whisky_id: d14.id, body: "Best")
p23 = u3.posts.create!(whisky_id: d15.id, body: "Delicious.")
p24 = u4.posts.create!(whisky_id: d16.id, body: "Need more...")
p25 = u4.posts.create!(whisky_id: d17.id, body: "Great after a long day.")
p26 = u4.posts.create!(whisky_id: d18.id, body: "Best whisky_id ever.")
p27 = u5.posts.create!(whisky_id: d19.id, body: "Delicious.")
p28 = u5.posts.create!(whisky_id: d20.id, body: "Best")
p29 = u5.posts.create!(whisky_id: d21.id, body: "Delicious.")
p30 = u5.posts.create!(whisky_id: d22.id, body: "Need more...")

# c1 = u2.comments.create!(post_id: p1.id, body: "Amazing post.")
# c1 = u3.comments.create!(post_id: p1.id, body: "Radical post.")
# c1 = u5.comments.create!(post_id: p3.id, body: "Cool post.")
# c2 = u2.comments.create!(post_id: p5.id, body: "Cooler post.")
# c3 = u3.comments.create!(post_id: p4.id, body: "Coolest post.")
# c4 = u4.comments.create!(post_id: p5.id, body: "Fine.")
# c5 = u3.comments.create!(post_id: p6.id, body: "Coolest post.")
#
#
# t1 = p3.toasts.create!(user_id: u1.id)
# t2 = p3.toasts.create!(user_id: u2.id)
# t3 = p4.toasts.create!(user_id: u3.id)
# t4 = p4.toasts.create!(user_id: u4.id)
# t5 = p5.toasts.create!(user_id: u5.id)
# t6 = p5.toasts.create!(user_id: u6.id)
# t7 = p6.toasts.create!(user_id: u7.id)
# t8 = p6.toasts.create!(user_id: u8.id)
# t9 = p7.toasts.create!(user_id: u9.id)
# t10 = p7.toasts.create!(user_id: u10.id)
# t11 = p8.toasts.create!(user_id: u11.id)
# t12 = p8.toasts.create!(user_id: u12.id)
# t13 = p9.toasts.create!(user_id: u13.id)
# t14 = p9.toasts.create!(user_id: u14.id)
# t15 = p9.toasts.create!(user_id: u15.id)
# t16 = p10.toasts.create!(user_id: u16.id)
# t17 = p11.toasts.create!(user_id: u17.id)
# t18 = p12.toasts.create!(user_id: u18.id)
# t19 = p14.toasts.create!(user_id: u19.id)
# t20 = p15.toasts.create!(user_id: u20.id)
