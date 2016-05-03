class TodoController < ApplicationController
  def index
    @todo = Todo.all
  end

  def show
    @todo = Todo.find(params[:description])
  end

  def new
    @todo = Todo.new
    # @todo.description = params[:description]
    # @todo.save!
    # puts params
	end

  def edit
  end

  def create
    # @todo = Todo.new params.require(:todo).permit(:description)
    @todo = Todo.new(todo_params)
    #@todo.save!

    if @todo.save
      redirect_to @todo
    end

    # @restaurante = Restaurante.new params.require(:restaurante).permit(:nome, :endereco, :especialidade)
    #@restaurante.save
    # render plain: params[:article].inspect

    # puts params
    
    # render plain: params[:todo].inspect
  end

  def update
  end

  def destroy
  end 

  private
    def article_params
      
    end
end
