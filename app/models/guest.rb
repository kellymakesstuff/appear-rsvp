class Guest < ApplicationRecord
  belongs_to :household
  has_one :order
  has_many :photos
end
