Rails.application.routes.draw do
  resources :households do
    resources :guests  do
      resources :orders
    end
  end
  resources :photos
  resources :guests, only: :index

end
