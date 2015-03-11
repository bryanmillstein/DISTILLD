module Api

  class PostsController < ApplicationController

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      render json: {}
    end

    private

    def post_params
      params.require(:post).permit(:user_id, :drink, :body)
    end
  end
end
