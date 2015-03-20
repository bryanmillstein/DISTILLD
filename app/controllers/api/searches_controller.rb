module Api
  class SearchesController < ApplicationController

    def index
      @search_results = PgSearch
        .multisearch(params[:query])
        .page(params[:page]).per(5)
    end


  end
end
