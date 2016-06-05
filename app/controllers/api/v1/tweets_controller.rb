class Api::V1::TweetsController < ApplicationController
  def index
    @tweets = Tweet.includes(:user).order("created_at DESC")
  end

  def create
    @tweet = Tweet.create(tweet_params)
    render :show, status: :created
  end

  private
  def tweet_params
    params.permit(:text,
                  :image
                 ).merge(user_id: current_user.id)
  end
end
