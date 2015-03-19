json.extract! @user, :id, :user_name, :email, :created_at, :updated_at
json.picture_url image_url(@user.picture.url(:profile_pic))
json.is_current_user is_current_user?(@user)
json.is_friend is_friend(@user)

json.posts @user.posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at
  json.user_name post.user.user_name
  json.user_picture_url image_url(post.user.picture.url(:thumb))
  json.post_picture_url image_url(post.picture.url)
  json.current_user_toast current_user_toast?(post)
  json.toast_number post.toasts.count

  json.comments post.comments do |comment|
    json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
    json.user_name comment.user.user_name
    json.user_picture_url image_url(comment.user.picture.url(:thumb))
    json.is_current_user is_current_user?(comment.user)
  end

  json.toasts post.toasts do |toast|
    json.extract! toast, :id, :user_id, :post_id, :created_at, :updated_at
    json.user_name toast.user.user_name
    json.user_picture_url image_url(toast.user.picture.url)
  end
end
