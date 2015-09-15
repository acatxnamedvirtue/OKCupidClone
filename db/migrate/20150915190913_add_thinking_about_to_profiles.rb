class AddThinkingAboutToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :thinking_about, :string
  end
end
