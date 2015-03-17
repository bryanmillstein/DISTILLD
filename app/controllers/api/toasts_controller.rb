module Api
  class ToastsController < ApplicationController

    def create
      toast = Toast.where({ user_id: current_user.id, post_id: params[:post_id] }).first

      if toast
        Toast.destroy(toast)
        render json: {}
      else
        toast = current_user.toasts.new(toast_params)

        if toast.save
          render :@toast
        else
          render json: toast.errors.full_messages, status: :unprocessable_entity
        end
      end

    end

    private

    def toast_params
      param.require(:toast).permit(:post_id)
    end

  end
end
