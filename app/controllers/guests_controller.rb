class GuestsController < ApplicationController
  before_action :set_guest, only: [:show, :household_index, :update, :destroy]

  # GET /guests
  def index
    @guests = Guest.all

    render json: @guests, include: :order
  end

  # GET /households/1/guests
  def household_index
    @guests = Guest.where("household_id = ?", params[:household_id])

    render json: @guests, include: :order
  end

  # GET /guests/1
  def show
    render json: @guest, include: :order
  end

  # POST /guests

  def create
    @guest = Guest.new(guest_params)
    @household= Household.find(params[:household_id])
    @guest.household = @household
    if @guest.save
      render json: @guest , include: :households, status: :created
    else
      render json: @guest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /guests/1
  def update
    if @guest.update(guest_params)
      render json: @guest
    else
      render json: @guest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /guests/1
  def destroy
    @guest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guest = Guest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def guest_params
      params.require(:guest).permit(:first_name, :surname, :attending, :under10, :phone, :email, :household_id)
    end
end
