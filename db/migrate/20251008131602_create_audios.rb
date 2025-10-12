class CreateAudios < ActiveRecord::Migration[7.2]
  def change
    create_table :audios do |t|
      t.string :title, null: false
      t.float :duration
      t.references :chapter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
