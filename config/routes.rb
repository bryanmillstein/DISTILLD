Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]

  resource :session

  namespace :api, default: { format: :json } do
    resources :users, only: [:show, :index, :update]
    resources :posts, only: [:create, :update, :destroy]
  end


end
