class TodoController < ApplicationController
  def index
  end

  def show
  end

  def new
    
	end

  def edit
  end

  def create
    #@restaurante = Restaurante.new params.require(:restaurante).permit(:nome, :endereco, :especialidade)
    #@restaurante.save
    # render plain: params[:article].inspect
    
    render plain: params[:todo].inspect
  end

  def update
  end

  def destroy
  end 

  private
    def article_params
      
    end
end
