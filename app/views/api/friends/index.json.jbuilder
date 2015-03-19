json.array! @friends do |friend|
  json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
  json.user_picture_url image_url(friend.picture.url(:thumb))
  json.is_friend is_friend(friend)

end
