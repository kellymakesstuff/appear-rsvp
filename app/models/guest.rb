class Guest < ApplicationRecord
  belongs_to :household
  has_one :order, dependent: :destroy
  has_many :photos, dependent: :destroy
end
