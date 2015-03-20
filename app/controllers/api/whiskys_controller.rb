module Api
  class WhiskysController < ApplicationController

    def index
      @whiskys = Whisky.where("name ~ ?", params[:query])

      render :index
    end
  end
end

# @whiskys = Whisky.where("name ~ ? OR brand ~ ?", 'm')
