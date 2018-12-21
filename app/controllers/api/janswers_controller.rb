class Api::JanswersController < ApplicationController
  before_action :set_janswer, only: [:update, :destroy]

  def index
    render json: Janswer.all
  end

  def create
    janswer = Janswer.new(janswer_params)

    if janswer.save
      render json: janswer
    else
      render json: janswer.errors, status: 422
    end
  end

  def update
    if @janswer.update(janswer_params)
      render json: @janswer
    else
      render json: @janswer.errors, status: 422
    end
  end

  def destroy
    @janswer.destroy
  end

  private
  def set_janswer
    @janswer = Janswer.find(params[:id])
  end

  def janswer_params
    params.require(:janswer).permit(:answerone, :answertwo, :answerthree, :correct, :jcard_id)
  end
end