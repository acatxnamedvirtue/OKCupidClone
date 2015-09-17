json.extract!(@message, :id, :sender_id, :recipient_id, :title, :body)

json.sender do
    json.extract!(@message.sender, :id, :username, :email)
end

json.recipient do
  json.extract!(@message.recipient, :id, :username, :email)
end
