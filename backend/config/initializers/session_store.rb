if Rails.env == "development"
  Rails.application.config.session_store :cookie_store, key: '_backend'
# else 
#   Rails.application.config.session_store :cookie_store, key: '_backend', domain: ""
end