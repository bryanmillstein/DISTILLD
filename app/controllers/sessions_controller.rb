class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      log_in_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email/password combination. Please try again."]
      render :new
    end
  end

  def destroy
    log_out!(current_user)
    session[:user_id] = nil
    redirect_to new_session_url
  end

end
