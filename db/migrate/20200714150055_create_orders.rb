class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :entree
      t.string :allergies
      t.references :guest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
