class Household < ApplicationRecord
  has_many :guests, dependent: :destroy
  has_many :photos, dependent: :destroy
end
