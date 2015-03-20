json.array! @whiskys do |whisky|
  json.extract! whisky, :id, :name, :brand, :style, :created_at, :updated_at
end
