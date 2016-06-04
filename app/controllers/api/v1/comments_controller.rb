class Api::V1::CommentsController < ApplicationController
  before_action :set_tweet
  def index
		@comments = @tweet.comments.includes(:user)
  end

  def create
    @comment = @tweet.comments.create(comment_params)
    render :show, status: :created
  end

  private
  def set_tweet
		@tweet = Tweet.find(params[:tweet_id])
  end

  def comment_params
    params.permit(
                  :text
                 ).merge(user_id: current_user.id)
  end
end
