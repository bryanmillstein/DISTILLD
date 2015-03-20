module Api
  class UsersController < ApplicationController

    def show
      @user = User.includes(:whiskys, posts: [:comments, :whisky]).find(params[:id])
      render :show
    end

    def update
      @user = User.find(current_user.id)

      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end


    private

    def user_params
      params.require(:user).permit(:user_name, :email, :picture, :background_picture)
    end

  end
end
