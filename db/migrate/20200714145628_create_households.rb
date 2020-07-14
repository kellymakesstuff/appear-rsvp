class CreateHouseholds < ActiveRecord::Migration[6.0]
  def change
    create_table :households do |t|
      t.string :surname
      t.string :address

      t.timestamps
    end
  end
end
