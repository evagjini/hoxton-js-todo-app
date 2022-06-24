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


   function renderApp() {
    let appEl = document.createElement('div')
    appEl.className = 'app'
    document.body.append(appEl)
  }

function renderOptionsSections(){
    let optionsSection = document.createElement('section');
    optionsSection.className= ('options');
    let optionsTitle = document.createElement('h2');
    optionsTitle.className=('sec-title');
    optionsTitle.innerText='Options';
    


    let showCompletedLabel=document.createElement('label')
    let showCompletedInput=document.createElement('input')
    showCompletedInput.type='checkbox'


    showCompletedLabel.append('Show completed' , showCompletedInput)
    optionsSection.append(optionsTitle,showCompletedLabel )



    let appEl = document.querySelector('.app')
    appEl?.append(optionsSection)

}


function render(){
    document.body.textContent=''

renderApp()
renderOptionsSections()

}

render()




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