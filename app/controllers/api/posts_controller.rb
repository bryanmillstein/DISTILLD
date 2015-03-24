module Api

  class PostsController < ApplicationController

    def index
      if params[:user_id]
        user = User.find(params[:user_id])
        @posts = Post.get_user_posts(user, params[:page])
      elsif params[:place_id]
        @posts = Post.get_place_posts(current_user, params[:placeId], params[:page])
      else
        @posts = Post.get_friends_posts(current_user, params[:page])
      end
      render :posts
    end

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @post = current_user.posts.find(params[:id])

      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      render json: {}
    end

    private

    def post_params
      params.require(:post).permit(:user_id, :whisky_id, :place_id, :body, :picture)
    end
  end
end
