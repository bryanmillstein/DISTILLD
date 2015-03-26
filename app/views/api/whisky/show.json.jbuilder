json.extract! @whisky, :id, :name, :brand, :style, :created_at, :updated_at


json.posts @posts do |post|
  json.extract! post, :id, :user_id, :body, :place_id, :place_name, :place_formatted_address, :created_at, :updated_at

  json.user_name post.user.user_name
  json.user_picture_url image_url(post.user.picture.url(:thumb))
  json.time_ago post.time_ago
end
