json.(user, :id, :user_name, :email)
json._type "User"
json.is_friend is_friend(user)
json.picture_url image_url(user.picture.url(:thumb))
