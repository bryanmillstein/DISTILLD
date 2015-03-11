json.extract! @user, :user_name, :email, :created_at, :updated_at

json.posts @user.posts do |post|
  json.extract! post, :user_id, :drink, :body, :created_at, :updated_at
end
