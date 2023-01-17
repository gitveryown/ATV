const question = document.querySelectorAll('.faq-question')
const answer = document.querySelectorAll('.faq-answer')
const plus = document.querySelectorAll('.plus')
const button = document.querySelectorAll('button')
const list_items = document.querySelectorAll('li')


for(let i = 0; i < question.length; i++){
    let qText = question[i]
    qText.addEventListener('click' , () =>{
        answer[i].classList.toggle('faq-answer-opened');
       plus[i].classList.remove('plusafter');
    })
}

// for(let i = 0; i < list_items.length; i++){
//     let list = list_items[i]
// }
// list.addEventListener('click' , () =>{
    
// })

