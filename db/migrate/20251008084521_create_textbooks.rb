class CreateTextbooks < ActiveRecord::Migration[7.2]
  def change
    create_table :textbooks do |t|
      t.timestamps
      t.string :name,  null: false
      t.string :level, null: false
      t.string :series
      t.string :cover_image, null: false
      t.text :description
    end
  end
end
