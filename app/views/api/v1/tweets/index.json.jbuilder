json.tweets @tweets.each do |tweet|
  json.(tweet, :id, :text, :image, :user_id)
  json.nickname tweet.user.nickname
end
