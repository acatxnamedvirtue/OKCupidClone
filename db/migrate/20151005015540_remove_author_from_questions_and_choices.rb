class RemoveAuthorFromQuestionsAndChoices < ActiveRecord::Migration
  def change
    remove_column :questions, :author_id
    remove_column :questions, :body
    remove_column :question_choices, :author_id
  end
end
