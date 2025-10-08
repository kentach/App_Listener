class TextbooksController < ApplicationController
  def index
    @textbooks = Textbook.all.order(:level)
    @textbooks_by_level = @textbooks.group_by(&:level)
  end

  def show
    @textbook = Textbook.find(params[:id])
  end

end
