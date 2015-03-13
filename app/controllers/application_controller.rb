class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :auth_form, :logged_in?, :is_current_user?, :is_friend

  def is_current_user?(user)
    current_user == user
  end

  def is_friend(user)
    current_user.friends.include?(user)
    # friendship = Friendship.where({ user_id: current_user.id, friend_id: user.id })
    # if friendship.first
    #   return friendship.first.id
    # else
    #   return "null"
    # end
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
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
