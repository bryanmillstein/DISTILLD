Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]

  resource :session


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :update]
    resources :posts, only: [:create, :update, :destroy, :index]
    resources :friendships, only: [:create]
    resources :comments, only: [:create, :update, :destroy]
    get "search", to: "searches#index"


  end


end
