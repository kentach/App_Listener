class Textbook < ApplicationRecord
  validates :name, presence: true
  validates :level, presence: true
  validates :cover_image, presence: true

  has_many :chapters
  has_many :favorites, as: :favoritable, dependent: :destroy
end