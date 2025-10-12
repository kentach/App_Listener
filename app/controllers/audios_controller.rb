class AudiosController < ApplicationController
    def new
        @audio = Audio.new
    end

    def create
        @audio = Audio.new(audio_params)
        if @audio.save
            redirect_to textbook_path(@audio.chapter.textbook), notice: "音声を登録しました"
        else
            render :new, status: :unprocessable_entity
        end
    end
    def show
        @audio = Audio.find(params[:id])
    end

private

    def audio_params
    params.require(:audio).permit(:title, :file, :chapter_id)
    end

end
