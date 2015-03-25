module Api
  class PlacesController < ApplicationController
    def show
      @posts = Post.get_place_posts(current_user, params[:place_id], params[:page])
    end
  end
end
