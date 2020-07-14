class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :surname
      t.string :phone
      t.string :email
      t.boolean :under10
      t.boolean :attending
      t.references :household, null: false, foreign_key: true

      t.timestamps
    end
  end
end
