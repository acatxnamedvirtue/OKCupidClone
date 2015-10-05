json.extract!(@question, :id, :title)

json.question_choices do
  json.array! @question.question_choices do |choice|
    json.extract!(choice, :id, :question_id, :body)
  end
end

json.question_answers do
  json.array! @question.question_answers do |answer|
    json.extract!(answer, :id, :question_id, :question_choice_id, :user_id, :importance)
  end
end
