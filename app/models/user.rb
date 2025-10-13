class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :eiken_level, presence: true
  mount_uploader :profile_picture, UserImageUploader
  has_many :favorites
  has_many :favorite_textbooks, through: :favorites, source: :favoritable, source_type: 'Textbook'
  has_many :favorite_audios, through: :favorites, source: :favoritable, source_type: 'Audio'
end
