class ChangeTitleNullableInAudios < ActiveRecord::Migration[7.0]
  def change
    change_column_null :audios, :title, true
  end
end