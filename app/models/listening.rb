class Listening < ApplicationRecord
    validates :title, presence: true
    validates :level, presence: true
    validates :duration, presence: true
end
