json.array! @posts do |post|
  json.extract! post, :id, :user_id, :drink, :body, :created_at, :updated_at
end
