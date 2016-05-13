class TodoController < ApplicationController
  def newtask

    @todo = Todo.new
    @todo.description = params[:description]

    if @todo.valid?
        @todo.save
        
        render json: {success:true, todo: {id: @todo.id, description: @todo.description}}

      else
        render json: {success:false}

      end

  end


  def gettask
    @todos = Todo.all
    description = true
    respond_to do |format|
      format.json {
      }
      format.html {   
        render json: @todos   
      }
    end

  end

  def deltask    
    @todo = Todo.find(params[:id])   
    @todo.destroy
    render json: {success:true}
  end

  def index
    @todos = Todo.all
    @todo = Todo.new
  end

  def uptask
    @todo = Todo.find(params[:id])
    @todo.update(task_param)
    render json: {success:true, todo: {id: @todo.id, description: @todo.description}}
  end
  
  private
    def task_param
      params.require(:todo).permit(:description)
    end

end
