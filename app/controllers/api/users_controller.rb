module Api
  class UsersController < ApplicationController

    def show
      @user = User.includes(:posts).find(params[:id])
      render :show
    end

    def index

    end

  end

end
