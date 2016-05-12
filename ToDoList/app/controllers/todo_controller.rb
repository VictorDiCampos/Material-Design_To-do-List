class TodoController < ApplicationController
  # def teste
  def newtask

    @todo = Todo.new
    @todo.description = params[:description]

    if @todo.valid?
        @todo.save
        
        respond_to do |format|
          format.json {
          }
          format.html {   
            render json: {success:true, todo: {id: @todo.id, description: @todo.description}}  
          }
        end      
        # flash[:success] = "A Clínica <strong>#{@clinic.name}</strong> foi criado com sucesso.".html_safe
        # redirect_to clinics_path
      else
        respond_to do |format|
          format.json {
          }
          format.html {
            render json: {success:false}
          }
        end
        # flash.now[:error] = "<strong>Erro</strong> ao criar a Clínica <strong>#{@clinic.name}</strong>, tente novamente.".html_safe
        # render :new
      end

    # render plain: params[:description]

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

end
