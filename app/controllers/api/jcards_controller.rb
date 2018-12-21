class Api::JcardsController < ApplicationController
  before_action :set_jcard, only: [:update, :destroy]

  def index
    render json: Jcard.all
  end

  def show
    render json: Jcard.find(:category_id)
  end

  def create
    jcard = Jcard.new(jcard_params)

    if jcard.save
      render json: jcard
    else
      render json: jcard.errors, status: 422
    end
  end

  def update
    if @jcard.update(jcard_params)
      render json: @jcard
    else
      render json: @jcard.errors, status: 422
    end
  end

  def destroy
    @jcard.destroy
  end

  private
  def set_jcard
    @jcard = Jcard.find(params[:id])
  end

  def jcard_params
    params.require(:jcard).permit(:question, :points, :category_id)
  end
end