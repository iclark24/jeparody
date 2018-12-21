class CreateJanswers < ActiveRecord::Migration[5.2]
  def change
    create_table :janswers do |t|
      t.string :answerone
      t.string :answertwo
      t.string :answerthree
      t.string :correct
      t.belongs_to :jcard, foreign_key: true

      t.timestamps
    end
  end
end
