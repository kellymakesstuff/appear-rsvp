class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :surname
      t.boolean :attending
      t.boolean :under10
      t.bigint :phone
      t.string :email
      t.references :household, null: false, foreign_key: true

      t.timestamps
    end
  end
end
