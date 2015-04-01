module Api
  class SuggestionsController < ApplicationController


    def index
      @suggestions = Suggestion.get_friends_posts(current_user, params[:page])

      render :suggestions
    end

    def create
      @suggestion = current_user.suggestions.new(suggestion_params)

      if @suggestion.save
        render json: @suggestion
      else
        render json: @suggestion.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @suggestion = Suggestion.find(params[:id])
      @suggestion.destroy
      render json: {}
    end

    private

    def suggestion_params
      params.require(:suggestion).permit(:user_id, :whisky_id, :body, :recipient_id)
    end
  end
end
