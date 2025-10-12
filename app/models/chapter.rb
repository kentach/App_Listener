class Chapter < ApplicationRecord
  belongs_to :textbook
  has_many :audios

  validates :title, presence: true
end
