module Api
  class WhiskyController < ApplicationController

    def index
      @whiskys = Whisky.where("(name ~ ?) OR (brand ~ ?) OR (name ~ ?) OR
       (brand ~ ?)", params[:query], params[:query], params[:query].upcase, params[:query].upcase)

      render :index
    end

    def show
      @whisky = Whisky.find(params[:id])

      @posts = Post.get_whisky_posts(current_user, params[:id], params[:page])
    end
  end
end
