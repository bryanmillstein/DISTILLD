module Api
  class CommentsController < ApplicationController

      def create
        @comment = current_user.comments.new(comments_params)

        if @comment.save
          render json: @comment
        else
          render json: @comment.errors.full_message, status: :unprocessable_entity
        end
      end

      def update
        @comment = Comment.find(params[:id])

        if @comment.update
          render @comment
        else
          render json: @comment.errors.full_message, status: :unprocessable_entity
        end
      end

      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: {}
      end

      private

      def comments_params
        params.require(:comment).permit(:post_id, :body)
      end
  end
end
