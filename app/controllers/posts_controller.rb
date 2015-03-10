class PostsController < ApplicationController

  def create
    @post = current_user.posts.new(post_params)

    if @post
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :drink, :body)
  end
  
end
