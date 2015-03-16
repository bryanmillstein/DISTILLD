json.extract! @user, :id, :user_name, :email, :created_at, :updated_at

json.posts @user.posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at

  json.comments post.comments do |comment|
    json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
  end
end

json.is_current_user is_current_user?(@user)

json.is_friend is_friend(@user)

# json.friendships @user.friendships do |friendship|
#   json.extract! friendship, :id, :user_id, :friend_id, :created_at, :updated_at
# end
#
# json.friends @user.friends do |friend|
#   json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
# end
