Rails.application.routes.draw do
  resources :households, only: [:index, :show, :create, :update, :destroy] do
    resources :guests, only: [:index, :show, :create, :update, :destroy] do
      resources :orders, only: [:index, :show, :create, :update, :destroy]
    end
    resources :photos, only: [:index, :show, :create, :update, :destroy]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
