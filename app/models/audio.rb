class Audio < ApplicationRecord
  belongs_to :chapter
  has_one_attached :file
  validates :duration, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true
  has_many :favorites, as: :favoritable, dependent: :destroy

end
