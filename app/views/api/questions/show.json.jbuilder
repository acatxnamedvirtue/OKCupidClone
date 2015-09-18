json.extract!(@question, :id, :author_id, :body, :title)

json.question_choices do
  json.array! @question.question_choices do |choice|
    json.extract!(choice, :id, :question_id, :author_id, :body)
  end
end

json.question_answers do
  json.array! @question.question_answers do |answer|
    json.extract!(answer, :id, :question_id, :question_choice_id, :user_id, :importance)
  end
end

json.author(@question.author, :id, :username, :email)
