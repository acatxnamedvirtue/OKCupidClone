Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :index, :show, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :profiles, only: [:index, :show, :edit, :update]
    resources :messages, only: [:index, :show, :create]
    resources :likes, only: [:index, :show, :create, :destroy]
  end
end
