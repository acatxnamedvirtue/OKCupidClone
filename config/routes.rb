Rails.application.routes.draw do
  resources :widgets
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :show, :create, :destroy]
    resources :users, only: [:new, :index, :show, :create, :edit, :update]
    resources :profiles, only: [:index, :show, :edit, :update]
    resources :messages, only: [:index, :show, :create]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :questions, only: [:index, :show, :create]
    resources :question_choices, only: [:index, :show, :create]
    resources :question_answers, only: [:index, :show, :create]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
