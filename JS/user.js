
//MODAL Edit Customer Account
const modalcontainer = document.querySelector('.js-modal-container')
const adProductbtn = document.querySelectorAll('.js-edit-product')
const modal = document.querySelector('.js-modal')
const modalClose =document.querySelector('.js-modal-close')
const modal_save_change=document.querySelector('.js-modal-savechange')


function ShowAddProduct(){
    modal.classList.add('open')
}

function HideAddProduct(){
    modal.classList.remove('open')
}

adProductbtn.forEach((item) => {
    item.addEventListener('click', ShowAddProduct)
} )
modalClose.addEventListener('click',HideAddProduct)

modal_save_change.addEventListener('click',HideAddProduct)


modalcontainer.addEventListener('click',function(event){
    event.stopPropagation()
})


//MODAL DELETE ALERT
const modalcontainer_Dele = document.querySelector('.js-modal-delete-container')
const Dele_acc_btn = document.querySelectorAll('.js-delete-acc')
const modal_Dele = document.querySelector('.js-modal-delete')
const modal_Cancel =document.querySelector('.js-modal-delete-close')
const modal_deleted =document.querySelector('.js-modal-deleted')

function ShowAlertDelet(){
    modal_Dele.classList.add('open')
}

function HideAlertDelet(){
    modal_Dele.classList.remove('open')
}

Dele_acc_btn.forEach((item) => {
    item.addEventListener('click', () => {
        modal_Dele.classList.add('open');
    })
} )
modal_Cancel.addEventListener('click',() => {
    modal_Dele.classList.remove('open');
})

modal_deleted.addEventListener('click',() => {
    modal_Dele.classList.remove('open');
})


modal_Dele.addEventListener('click',function(event){
    event.stopPropagation()
})
