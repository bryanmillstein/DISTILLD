json.array! @friends do |friend|
  json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
end
