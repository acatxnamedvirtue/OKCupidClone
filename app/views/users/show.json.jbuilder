json.extract!(@user, :id, :username, :email)

json.sent_messages do
  json.array! @user.sent_messages do |msg|
    json.extract!(msg, :id, :sender_id, :recipient_id, :title, :body)

    json.recipient(msg.recipient, :id, :username, :email)
  end
end

json.received_messages do
  json.array! @user.received_messages do |msg|
    json.extract!(msg, :id, :sender_id, :recipient_id, :title, :body)

    json.sender(msg.sender, :id, :username, :email)
  end
end

json.likers do
  json.array! @user.likers do |liker|
    json.extract!(liker, :id, :username, :email)
  end
end

json.likes do
  json.array! @user.likes do |like|
    json.extract!(like, :id, :profile_id, :liker_id)
  end
end

json.liked_users do
  json.array! @user.liked_users do |liked_user|
    json.extract!(liked_user, :id, :username, :email)
  end
end
