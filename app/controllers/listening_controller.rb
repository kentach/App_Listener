class ListeningController < ApplicationController
    def index
        levels_order = ["5級", "4級", "3級", "準2級", "2級", "準1級", "英検1級"]
        @listenings = Listening.all.sort_by { |l| levels_order.index(l.level) || levels_order.size }
    end

    def show
        @listening = Listening.find(params[:id])
        @related_videos = Listening
        .where(level: @listening.level)
        .where.not(id: @listening.id)
        .limit(6)
    end
end
