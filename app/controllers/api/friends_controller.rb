module Api
  class FriendsController < ApplicationController
    def index
      @friends = current_user.friends
      render :index
    end
  end
end
