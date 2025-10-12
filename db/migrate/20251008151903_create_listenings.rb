class CreateListenings < ActiveRecord::Migration[7.2]
  def change
    create_table :listenings do |t|
      t.timestamps
      t.string :title, null: false
      t.string :level, null: false
      t.float :duration, null: false
      t.string :description

    end
  end
end
