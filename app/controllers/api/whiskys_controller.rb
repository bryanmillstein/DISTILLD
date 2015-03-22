module Api
  class WhiskysController < ApplicationController

    def index
      @whiskys = Whisky.where("(name ~ ?) OR (brand ~ ?) OR (name ~ ?) OR
       (brand ~ ?)", params[:query], params[:query], params[:query].upcase, params[:query].upcase)

      render :index
    end
  end
end
