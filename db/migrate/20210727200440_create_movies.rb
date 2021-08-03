class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :language
      t.string :genre
      t.string :director
      t.string :description
      t.integer :duration
      t.date :release_date

      t.timestamps
    end
  end
end
