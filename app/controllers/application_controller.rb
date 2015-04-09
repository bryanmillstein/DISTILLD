class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :auth_form, :logged_in?, :is_current_user?, :is_friend, :current_user_toast?

  def is_current_user?(user)
    current_user == user
  end

  def is_friend(user)
    current_user.friends.include?(user)
  end

  def current_user_toast?(post)
    post.toasters.include?(current_user)
  end

  def current_user
    @current_user ||= ((User.find_by_session_token(session[:session_token])) || (User.find(session[:user_id]) if session[:user_id]))
  end

  def logged_in?
    !!current_user
  end

  def log_in_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in!
    redirect_to new_session_url unless logged_in?
  end

  private

  def auth_form
    <<-HTML.html_safe
    <input type="hidden"
           name="authenticity_token"
           value="#{form_authenticity_token}">

    HTML
  end

end
