class CreateQuestionAnswers < ActiveRecord::Migration
  def change
    create_table :question_answers do |t|
      t.integer :question_id, null: false
      t.integer :question_choice_id, null: false
      t.integer :user_id, null: false
      t.integer :importance, null: false

      t.timestamps null: false
    end

    add_index :question_answers, :question_id
    add_index :question_answers, :question_choice_id
    add_index :question_answers, :user_id
  end
end
