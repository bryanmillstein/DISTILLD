module Api
  class FriendshipsController < ApplicationController

    def create
      friendship = current_user.friendships.new(friendship_params)
      friend = friendship.friend
      friendship_dup = friend.friendships.new(friend_id: current_user.id)

      if transaction do
          friendship.save
          friendship_dup.save
        end
        render json: friendship
      else
        render friendship.errors.full_messages, status: :unprocessable_entity
        render :create
      end
    end


    def destroy
      friendship = Friendship.find_by(params[:id])
      friend_id = friendship.friend_id
      friendship_dup = Friendship.where( "friend_id = 5 AND user_id = #{friend_id}" )

      transaction do
        Friendship.destroy(friendship)
        Friendship.destroy(friendship_dup)
      end
    end

    private

    def friendship_params
      params.require(:friendship).permit(:friend_id)
    end

  end
end
