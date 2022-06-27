// first step 

let state = {
    todos:[
        
        {text:'Go Shopping', completed:false },

        {text:'Work out', completed: false },

        {text:'See Doctor', completed:true},
        {text:'Eat Healthy', completed: false},

    ],

    showcompleted:true,
    
}
// input: none
// action: gets the incomplete todos
// output: the incomplete todos
    function getIncompleteTodos() {
    return state.todos.filter(todo => todo.completed === false)
  }
  function getCompleteTodos() {
    return state.todos.filter(todo => todo.completed === true)
  }

  function getTodosToDisplay() {
  if (state.showCompleted) return state.todos
  else return getIncompleteTodos()

}




function createTodo(text) {
    // check if the todo is in the list
    let foundMatch = state.todos.some(todo => todo.text === text)
    if (foundMatch) return // guard statement
  
    state.todos.push({ text: text, completed: false })
  }


  
function deleteTodo(text) {
    let updatedTodos = state.todos.filter(todo => todo.text !== text)
    state.todos = updatedTodos
  }
  function deleteAllTodos() {
    state.todos = []
  }

function toggleTodo(text) {
    // find the todo we want to toggle
    let match = state.todos.find(todo => todo.text === text)
    if (!match) return
  
    // if it exists, toggle it
    match.completed = !match.completed
  }
 
function toggleShowCompleted() {
    state.showCompleted = !state.showCompleted
  }
   function renderApp() {
    let appEl = document.createElement('div')
    appEl.className = 'app'
    document.body.append(appEl)
  }
  
  


function renderOptionsSections(){

    let optionsSection = document.createElement('section');

    let optionsTitle = document.createElement('h2');
    optionsTitle.className=('title');
    optionsTitle.innerText='OPTIONS';
  
    

    let showCompletedLabel=document.createElement('label')
    showCompletedLabel.textContent= 'Show Completed :'


    let showCompletedInput=document.createElement('input')
    showCompletedInput.type='checkbox'

     optionsSection.append(optionsTitle)
    showCompletedLabel.append(showCompletedInput)
    optionsSection.append(optionsTitle, showCompletedLabel)
  
    let appEl = document.querySelector('.app')

    appEl.append(optionsSection)
    render()
   
}


    function renderAddItems (){
    let addItemsSection = document.createElement('section');
    // addTodoSection.className= ('add-item')

    let title= document.createElement("h2")
    title.className= "title"
    title.textContent= "Add Item"

    let form = document.createElement("form")
    form.className = "add-item"

    let textInput = document.createElement('input');
    textInput.type= 'text'
    textInput.placeholder= 'Add your todo here ......'

    let addTodoButton = document.createElement('button')
    addTodoButton.textContent= 'Add button'




    form.addEventListener ('Submit', function (event){
       event.preventDefault()
       createTodo(textInput.value)
       render()

    })
       
     

     form.append(textInput, addTodoButton)
     addItemsSection.append(title,form)



    let appEl = document.querySelector('.app')
    appEl.append(addItemsSection)

    //  document.body.append(form)

    }


    function renderTodoSection(){
        let todoSection = document.createElement('section')

        let title= document.createElement('h2')
        title.className= 'title'
        title.textContent= 'TODO'



        let todoList= document.createElement('ul')
        todoList.className = 'todo-list'
        
        let incompleTodos = state.todos.filter(todo => todo.completed === false)
        
        for (let todo of incompleTodos){
            let todoItemEl = document.createElement('li')
            todoItemEl.className = 'todo'

           
          let checkboxEl = document.createElement('input') 
          checkboxEl.type = 'checkbox' 
          checkboxEl.className= 'checkbox'


          let todoTextEl = document.createElement('p')
          todoTextEl.className= 'todo-text'
          todoTextEl.innerText= todo.text


          let deleteButton= document.createElement('button')
          deleteButton.className= 'todo-delete'
          deleteButton.textContent= 'DELETE'


         todoItemEl.append(checkboxEl, todoTextEl,deleteButton)
         todoList.append(todoItemEl)

        }
        

        todoSection.append(title, todoList)

        
        appEl?.append(todoSection)
        render()

    }

function renderCompletedTodos(){
    let section = document.createElement('section')
   

    let title= document.createElement('h2')
    title.className= 'title'
    title.textContent= 'COMPLETED'


    let ul = document.createElement('ul')
    ul.className='list-completed'
    section.append(title, ul)

    



    let appEl= document.querySelector('.app')
    appEl.append(section);

}

function render(){
    document.body.textContent=''

renderApp()
renderOptionsSections()
renderAddItems()
renderTodoSection()
renderCompletedTodos()

}

render()





// if (state.showcompleted) showCompletedInput.checked =true
// showCompletedInput.addEventListener('click',function (){
//     toggleShowCompleted()
//     render()
// })







// function getIncompleteTodos(){
//     return state.todos.filter(todo=>todo.completed===false)
// }
// function getCompletedTodos(){
//     return state.todos.filter(todo=>todo.completed===true)
// }

// function getTodoToDisplay(){
//     if (state.showcompleted) return state.todos
//     else return getCompletedTodos()
// }
// <div class="app">
//         <section class="options">
//         <h2 class="sec-title">Options</h2>
//             <label>
//                 Show Completed
//                 <input type="checkbox"/>
//             </label>
//         </section>










// 