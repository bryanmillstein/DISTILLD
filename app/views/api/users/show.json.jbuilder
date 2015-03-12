json.extract! @user, :id, :user_name, :email, :created_at, :updated_at

json.posts @user.posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at
end

# json.friendships @user.friendships do |friendship|
#   json.extract! friendship, :id, :user_id, :friend_id, :created_at, :updated_at
# end
#
# json.friends @user.friends do |friend|
#   json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
# end
