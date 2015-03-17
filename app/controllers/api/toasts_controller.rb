module Api
  class ToastsController < ApplicationController

    def create
      @toast = Toast.where({ user_id: current_user.id, post_id: params[:post_id] }).first

      if @toast
        Toast.destroy(@toast.id)
        render json: {}
      else
        @toast = current_user.toasts.new(post_id: params[:post_id])

        if @toast.save
          render json: @toast
        else
          render json: @toast.errors.full_messages, status: :unprocessable_entity
        end
      end

    end

  end
end
