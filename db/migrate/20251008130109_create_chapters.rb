class CreateChapters < ActiveRecord::Migration[7.2]
  def change
    create_table :chapters do |t|
      t.timestamps
      t.string :title
      t.integer :number
      t.string :description
      t.references :textbook, null: false, foreign_key: true

    end
  end
end
