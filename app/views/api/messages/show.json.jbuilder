json.extract!(@message, :id, :sender_id, :recipient_id, :title, :body)

json.sender do
    json.extract!(@message.sender, :id, :username, :email)
    json.profile_pic asset_path(@message.sender.profile.profile_pic.url)
end

json.recipient do
  json.extract!(@message.recipient, :id, :username, :email)
  json.profile_pic asset_path(@message.recipient.profile.profile_pic.url)
end
