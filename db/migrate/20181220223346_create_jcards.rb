class CreateJcards < ActiveRecord::Migration[5.2]
  def change
    create_table :jcards do |t|
      t.belongs_to :category, foreign_key: true
      t.integer :points
      t.string :question

      t.timestamps
    end
  end
end
