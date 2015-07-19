Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]

  resource :session

  get 'auth/:provider/callback', to: 'googles#create'
  get 'auth/failure', to: redirect('/')


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :update, :index]
    resources :posts, only: [:create, :update, :destroy, :index]
    resources :comments, only: [:create, :update, :destroy]
    resources :whisky, only: [:show, :index]
    resources :toasts, only: [:create]
    resources :friendships, only: [:create]
    resources :friends, only: [:index]
    resources :suggestions, only: [:index, :create, :update, :destroy]
    get "search", to: "searches#index"
    get "places", to: "places#show"
    get "friend", to: "friend#index"
  end


end
