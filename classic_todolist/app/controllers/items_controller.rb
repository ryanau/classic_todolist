class ItemsController < ApplicationController
  def index
    @items = Item.all
    @item = Item.new
  end

  def show
    @item = Item.find(params[:id])
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to root_path
    else
      @error = "Item didn't save"
      render 'new'
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      redirect_to @item
    else
      @error = "Item didn't update"
      render 'edit'
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to root_path
  end

  def complete
    @item = Item.find(params[:id])

    if @item.toggle!(:compeleted)
      redirect_to @item
    else
      @error = "Item didn't update"
      render 'edit'
    end
  end

  private

  def item_params
    params.require(:item).permit(:title)
  end

end
