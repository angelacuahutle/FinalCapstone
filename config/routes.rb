Rails.application.routes.draw do
  namespace :Api, defaults: { format: 'jason' } do
    get 'things', to: 'things#index'
  end
  get '*page', to: 'static#index', contraints: ->(req) do
    !req.xhr && req.format.html?
  end
  root 'static#index'
end
