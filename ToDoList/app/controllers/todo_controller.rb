class TodoController < ApplicationController
  # def teste
  def newtask

    @todo = Todo.new
    @todo.description = params[:description]

    if @todo.valid?
        @todo.save
        
        render json: {success:true, todo: {id: @todo.id, description: @todo.description}}
        # flash[:success] = "A Clínica <strong>#{@clinic.name}</strong> foi criado com sucesso.".html_safe
        # redirect_to clinics_path
      else
        
        render json: {success:false}
        # flash.now[:error] = "<strong>Erro</strong> ao criar a Clínica <strong>#{@clinic.name}</strong>, tente novamente.".html_safe
        # render :new
      end

    # render plain: params[:description]

  end

  def gettask

    # @todos = Todo.all
    @todo = Todo.find(params[:id])
    render json: {success:true, todo: {id: @todo.id, description: @todo.description}}
    # tasks_partial = ""    

    # @todos.each do |task|
    #   tasks_partial += render_to_string(task: task)
    # end
    
    # render json: {html: tasks_partial}

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

end
