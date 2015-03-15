json.array! @posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at

    json.comments post.comments do |comment|
      json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
    end
end


# @friends.each do |friend|
#   json.posts friend.posts do |post|
#     json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at
#     json.user_name friend.user_name
#
#     json.comments post.comments do |comment|
#       json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
#     end
#   end
# end
