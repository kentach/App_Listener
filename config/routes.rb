Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  root 'static_pages#top'
  resources :textbooks, only: [:index, :show]
  resources :chapters, only: %i[index]
  resources :listening, only: [:index, :show]
  resources :audios, only: [:new, :create, :show] do
    collection do
      get :chapters_for_textbook
    end
  end
  resources :favorites, only: [:index, :create, :destroy]
end
