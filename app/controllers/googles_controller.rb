class GooglesController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_url
  end

  def destroy
    log_out!(current_user)
    redirect_to new_session_url
  end
end
