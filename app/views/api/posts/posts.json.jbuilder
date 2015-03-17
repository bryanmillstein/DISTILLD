json.array! @posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at
  json.user_name post.user.user_name
  json.current_user_toast current_user_toast?(post)

    json.comments post.comments do |comment|
      json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
      json.user_name comment.user.user_name
      json.is_current_user is_current_user?(comment.user)
    end

    json.toasts post.toasts do |toast|
      json.extract! toast, :id, :user_id, :post_id, :created_at, :updated_at
      json.user_name toast.user.user_name
    end
end
