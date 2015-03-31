module Api
  class FriendsController < ApplicationController
    def index
      @user = User.find(params[:id])
      @friends = @user.friends
      render :index
    end
  end
end
