class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
    def configure_permitted_parameters
		if resource_class == User
   			devise_parameter_sanitizer.permit(:sign_up, keys: [:last_name,:first_name, :email, :password, :eiken_level])
   			devise_parameter_sanitizer.permit(:sign_in,keys:[:email,:password])
   			devise_parameter_sanitizer.permit(:account_update,keys:[:name,:email])
    end
  end
end
