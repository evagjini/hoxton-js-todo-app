// first step 
function renderOptionsSection(){
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

}


function render()

// function renderOptionsSection()