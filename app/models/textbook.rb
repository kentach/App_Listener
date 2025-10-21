class Textbook < ApplicationRecord
  validates :name, presence: true
  validates :level, presence: true
  validates :cover_image, presence: true

  has_many :chapters, dependent: :destroy
  has_many :audios
  has_many :favorites, as: :favoritable, dependent: :destroy
end