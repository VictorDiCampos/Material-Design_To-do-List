class Todo < ActiveRecord::Base
		validates :description, presence: true, length: { minimum: 1 }
end
