class GuestsController < ApplicationController
  before_action :set_guest, only: [:show, :update, :destroy]

  # GET /guests
  def index
    if params[:household_id]
    @household = Household.find(params[:household_id])
    render json: @household.guests, include: :order 
    else
    @guests = Guest.all

    render json: @guests, include: :order
    end
  end


  # GET /guests/1
  
  def show
    if params[:household_id]
    @household = Household.find(params[:household_id])
    render json: @household.guests, include: :order 
    else
    render json: @guest, include: :order
    end
  end

  # POST /guests

  def create
    @guest = Guest.new(guest_params)
    @household= Household.find(params[:household_id])
    @guest.household = @household
    if @guest.save
      render json: @guest , include: :household, status: :created
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
