Rails.application.routes.draw do
  get 'client/show'

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :items do
      get :complete
    end
  end

  get '*path', to: 'client#show'
  root to: 'client#show'
end
