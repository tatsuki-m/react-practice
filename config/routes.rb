Rails.application.routes.draw do
  devise_for :users
  root 'tweets#index'
  resources :tweets do
    resources :comments, only: [:create]
  end
  resources :users, only: [:show]
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :tweets, only: [:index, :create] do
        resources :comments, only: [:index, :create]
      end
    end
  end
end
