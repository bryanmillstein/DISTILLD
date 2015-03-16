json.results @search_results.map(&:searchable) do |model|
  json.partial! "/api/users/user", user: model
end

# json.friends current_user.friends do |friend|
#   json.extract! friend, :id, :user_name, :email, :created_at, :updated_at
# end
