Rails.application.routes.draw do

  namespace :api do
    resources :categories
    resources :jcards
    resources :janswers
  end


  get '*other', to: 'static#index'

end
