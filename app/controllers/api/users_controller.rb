module Api
  class UsersController < ApplicationController

    def show
      @user = User.includes(posts: :comments).find(params[:id])
      render :show
    end
  end
end
