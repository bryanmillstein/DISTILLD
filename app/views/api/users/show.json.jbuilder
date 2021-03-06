json.extract! @user, :id, :user_name, :email, :created_at, :updated_at
json.picture_url image_url(@user.picture.url(:profile_pic))

if @user.background_picture_updated_at
  json.background_picture_url image_url(@user.background_picture.url(:medium))
end

json.friend_count @user.friends.length
json.friends @user.friends do |friend|
  json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
  json.is_current_user is_current_user?(friend)
  json.is_friend is_friend(friend)

  json.picture_url image_url(friend.picture.url(:thumb))
end
json.whisky_count @user.whiskys.length
json.is_current_user is_current_user?(@user)
json.is_friend is_friend(@user)

json.whiskys @user.whiskys do |whisky|
  json.extract! whisky, :id, :name, :style, :brand
end

json.suggestions @user.received_suggestions do |suggestion|
  json.extract! suggestion, :id, :recipient_id, :user_id, :whisky_id, :created_at
  json.whisky_name suggestion.whisky.name
  json.whisky_brand suggestion.whisky.brand
  json.suggester_name suggestion.user.user_name

end

json.posts @posts do |post|
  json.extract! post, :id, :user_id, :body, :place_id, :rating, :place_name, :place_formatted_address, :created_at, :updated_at
  json.user_name post.user.user_name
  json.whisky post.whisky.name
  json.whisky_id post.whisky.id
  json.whisky_brand post.whisky.brand
  json.whisky_style post.whisky.style
  json.user_picture_url image_url(post.user.picture.url(:thumb))
  json.time_ago post.time_ago
  if post.picture_updated_at
    json.post_picture_url image_url(post.picture.url)
  end
  json.current_user_toast post.toasters.include?(@user)
  json.toast_number post.toasts.length

  json.comments post.comments do |comment|
    json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
    json.time_ago comment.time_ago
    json.user_name comment.user.user_name
    json.user_picture_url image_url(comment.user.picture.url(:thumb))
    json.is_current_user is_current_user?(comment.user)
  end

  json.toasts post.toasts do |toast|
    json.extract! toast, :id, :user_id, :post_id, :created_at, :updated_at
    json.user_picture_url image_url(toast.user.picture.url)
  end

  json.toasts post.toasters do |toaster|
    json.toaster_picture_url image_url(toaster.picture.url(:thumb))
    json.toaster_user_id image_url(toaster.id)
  end
end
