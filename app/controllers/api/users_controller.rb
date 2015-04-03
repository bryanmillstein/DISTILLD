module Api
  class UsersController < ApplicationController

    def index
      @users = User.where("(user_name ~ ?) OR (user_name ~ ?) OR (user_name ~ ?)", params[:query], params[:upcase], params[:lowercase])


      render :index
    end


    def show
      @user = User.includes(:whiskys, received_suggestions: [:whisky, :user]).find(params[:id])

      users_id = @user.id
      @posts = Post.includes(:user, :toasts, :toasters, :whisky, comments: [:user])
        .where("user_id = (?)", users_id).order(created_at: :desc).page(1).per(5)

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
