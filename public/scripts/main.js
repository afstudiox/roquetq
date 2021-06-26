import Modal from './modal.js'

 const modal = Modal()


 // mapear
 const modalTitle = document.querySelector('.modal h2')
 const modalDescription = document.querySelector('.modal p')
 const modalButton = document.querySelector('.modal button')





 //quando o botão MARCAR COMO LIDA for clicado ele abre a modal
 const checkButtons = document.querySelectorAll(".actions a.check")

 checkButtons.forEach(button =>{

    //adicionar a escuta
     button.addEventListener("click", handleClick)
 })



 //quando o botão EXCLUIR for clicado ele abre a modal
 const deleteButtons = document.querySelectorAll(".actions a.delete")

 deleteButtons.forEach(button =>{

    //adicionar a escuta
     button.addEventListener("click", (event) => handleClick(event, false))
 })




 function handleClick(event, check = true){

    event.preventDefault()

    const text = check ? "Marcar com lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal 
    modal.open()
 }

