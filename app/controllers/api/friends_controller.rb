module Api
  class FriendsController < ApplicationController
    # def index
    #   @friends = current_user.friends
    #   render :index
    # end

    def index
      @user = User.find(params[:id])
      @friends = @user.friends
      render :index
    end
  end
end
