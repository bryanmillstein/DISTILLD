json.array! @posts do |post|
  json.extract! post, :id, :user_id, :body, :place_id, :place_name, :place_formatted_address, :created_at, :updated_at
  json.whisky post.whisky.name
  json.whisky_brand post.whisky.brand
  json.whisky_style post.whisky.style


  json.user_name post.user.user_name
  json.user_picture_url image_url(post.user.picture.url(:thumb))
  json.time_ago post.time_ago

  if post.picture_updated_at
    json.post_picture_url image_url(post.picture.url(:medium))
  end

  json.toast_number post.toasts.length
  json.current_user_toast current_user_toast?(post)

  json.toasts post.toasts do |toast|
    json.extract! toast, :id, :user_id, :post_id, :created_at, :updated_at
    json.user_picture_url image_url(toast.user.picture.url(:thumb))
  end


    json.comments post.comments do |comment|
      json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
      json.time_ago comment.time_ago
      json.user_name comment.user.user_name
      json.user_picture_url image_url(comment.user.picture.url(:thumb))
      json.is_current_user is_current_user?(comment.user)
    end
end
