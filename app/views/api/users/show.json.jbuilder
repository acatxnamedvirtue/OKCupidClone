json.extract!(@user, :id, :username, :email, :sex_orientation, :gender, :country, :zip_code, :month, :day, :year)

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
    json.extract!(liker, :id, :username, :email, :gender, :year)
    json.profile_pic asset_path(liker.profile.profile_pic.url)
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
    json.profile_pic asset_path(liked_user.profile.profile_pic.url)
  end
end

json.answered_questions do
  json.array! @user.answered_questions do |question|
    json.extract!(question, :id, :title)
  end
end

json.profile_pic asset_path(@user.profile.profile_pic.url)
