class AddVideoToTextbook < ActiveRecord::Migration[7.2]
  def change
    add_column :textbooks, :video, :string
  end
end
