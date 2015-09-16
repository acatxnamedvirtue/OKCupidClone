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

json.likes do
  json.array! @user.likes do |like|
    json.extract!(like, :id, :liker_id, :profile_id)
  end
end

json.liked_profiles do
  json.array! @user.liked_profiles do |profile|
    json.extract!(profile, :id, :self_summary, :what_im_doing, :im_really_good_at,
      :favorites, :six_things, :friday_night, :message_me_if, :orientation,
      :ethnicity, :height, :body_type, :diet, :smokes, :drinks, :drugs, :religion,
      :sign, :education, :job, :income, :status, :relationship_type, :offspring,
      :pets, :speaks, :thinking_about)
  end
end
