class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :favoritable, polymorphic: true # TextbookまたはAudio
end
