class Household < ApplicationRecord
  has_many :guests, dependent: :destroy
end
