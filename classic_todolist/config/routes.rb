Rails.application.routes.draw do
  root 'items#index'

  put 'items/:id/complete', to: 'items#complete'
  resources :items
end
