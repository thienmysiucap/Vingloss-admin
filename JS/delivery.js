// DOM Elemet
const circles =document.querySelectorAll(".circle"),
progressBar =document.querySelector(".indicator"),
button_prev = document.querySelector("#prev");
button_next = document.querySelector("#next");
status_txt = document.querySelectorAll(".status-text")

let currentStep = 1;

//hàm update currentstep vs DOM 
const UppdateStep = (e) => {

    currentStep = e.target.id =="next" ? ++currentStep : --currentStep;

    circles.forEach((circle,index) =>{
        circle.classList[`${index < currentStep ? "add": "remove" }`] ("active");
    })

    status_txt.forEach((_status_text,index) =>{
        _status_text.classList[`${index < currentStep ? "add": "remove" }`] ("active-text");
    })

    progressBar.style.width =`${((currentStep -1) / (circles.length-1))*100}%`

    if(currentStep === circles.length){
        button_next.disabled = true;
    }

    else if(currentStep === 1){
        button_prev.disabled = true;
    }
    else{
        
        button_prev.disabled = false;
        button_next.disabled = false;

    }
    
};

button_prev.addEventListener("click",UppdateStep)
 button_next.addEventListener("click",UppdateStep)



