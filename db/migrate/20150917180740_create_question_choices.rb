class CreateQuestionChoices < ActiveRecord::Migration
  def change
    create_table :question_choices do |t|
      t.integer :question_id, null: false
      t.integer :author_id, null: false
      t.string :body, null: false

      t.timestamps null: false
    end

    add_index :question_choices, :author_id
  end
end
