class Chapter < ApplicationRecord
  belongs_to :textbook
  has_many :audios, dependent: :destroy

  validates :title, presence: true
end
