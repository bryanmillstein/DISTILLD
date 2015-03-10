Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users

  resource :session

  namespace :api, default: { format: :json } do
    resources :users, only: [:show]
  end


end
