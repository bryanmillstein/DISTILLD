json.array! @users do |user|
  json.extract! user, :id, :user_name, :email, :created_at, :updated_at
  json.picture_url image_url(user.picture.url(:thumb))
  json.is_friend is_friend(user)
end
