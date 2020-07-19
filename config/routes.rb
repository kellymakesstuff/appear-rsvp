Rails.application.routes.draw do
  root 'households#index'


  resources :households do
    resources :guests 

  end
 
  resources :photos
  
  resources :guests do
    resources :orders
  end

end
