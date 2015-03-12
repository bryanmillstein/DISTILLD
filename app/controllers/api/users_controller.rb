module Api
  class UsersController < ApplicationController

    def show
      @user = User.includes(:posts, :friendships, :friends).find(params[:id])
      render :show
    end

  end
end
