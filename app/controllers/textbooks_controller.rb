class TextbooksController < ApplicationController
  def index
    @textbooks = Textbook.all
      levels_order = ["英検5級", "英検4級", "英検3級", "英検準2級", "英検2級", "英検準1級", "英検1級"]

      @textbooks_by_level = @textbooks.group_by(&:level)
      @textbooks_by_level = @textbooks_by_level.sort_by { |level, _| levels_order.index(level) || 999 }.to_h
  end

   def show
    @textbook = Textbook.find(params[:id])
    @chapters = @textbook.chapters.includes(:audios)
  end

  def chapters
    @chapters = Textbook.find(params[:id]).chapters
    render json: @chapters
  end
end
