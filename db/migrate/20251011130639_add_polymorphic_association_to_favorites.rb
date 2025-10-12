class AddPolymorphicAssociationToFavorites < ActiveRecord::Migration[7.2]
  def change
    add_reference :favorites, :user, null: false, foreign_key: true
    add_reference :favorites, :favoritable, polymorphic: true, null: false
  end
end
