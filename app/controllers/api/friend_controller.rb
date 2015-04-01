module Api
  class FriendController < ApplicationController

    def index
      @friends = current_user.friends.where("(user_name ~ ?) OR (user_name ~ ?) OR (user_name ~ ?)", params[:query], params[:upcase], params[:lowercase])


      render :index
    end
  end
end
