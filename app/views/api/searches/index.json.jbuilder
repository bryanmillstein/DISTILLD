json.results @search_results.map(&:searchable) do |model|
  json.partial! "/api/users/user", user: model
end
