class AddSeriesToChapter < ActiveRecord::Migration[7.2]
  def change
    add_column :chapters, :series, :string
  end
end
