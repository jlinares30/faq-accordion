const btns = document.querySelectorAll('.btn')
const questions = document.querySelectorAll('.questions')
let firstElementImg = document.querySelector('.cruz:first-of-type')
let iconMinus = "./assets/images/icon-minus.svg"
let iconPlus = "./assets/images/icon-plus.svg"

function desplegar(button){
    button.addEventListener('click',()=>{
        const content = button.parentElement.nextElementSibling;
         if (content.style.display === 'block') {
             content.style.display = 'none';
             button.firstChild.src = iconPlus
         } else {
             content.style.display = 'block';
             button.firstChild.src = iconMinus
     
         }
     })
}

btns.forEach((button)=>{
    desplegar(button)
})

questions.forEach((question)=>{
    desplegar(question)
})

    


