json.comments @comments.each do |comment|
  json.(comment, :id, :text, :user_id)
  json.nickname comment.user.nickname
end
