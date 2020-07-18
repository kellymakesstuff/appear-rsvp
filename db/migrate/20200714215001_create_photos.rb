class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :src
      t.integer :width
      t.integer :height
      t.references :household, null: false, foreign_key: true

      t.timestamps
    end
  end
end
