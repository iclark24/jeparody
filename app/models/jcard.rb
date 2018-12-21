class Jcard < ApplicationRecord
  belongs_to :category, optional: true
  has_many :janswers, dependent: :destroy
end
