class AddVideoToListening < ActiveRecord::Migration[7.2]
  def change
    add_column :listenings, :video, :string
  end
end
