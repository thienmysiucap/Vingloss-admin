    //<!-- Java script modal add -->
    
            const modalcontainer = document.querySelector('.js-modal-container')
            const adProductbtn = document.querySelector('.js-add-product')
            const modal = document.querySelector('.js-modal')
            const modalClose =document.querySelector('.js-modal-close')
            const modal_save_add=document.querySelector('.js-modal-saveadd')

            function ShowAddProduct(){
                modal.classList.add('open')
            }

            function HideAddProduct(){
                modal.classList.remove('open')
            }

            modalClose.addEventListener('click',HideAddProduct)
            adProductbtn.addEventListener('click',ShowAddProduct)

            modal_save_add.addEventListener('click',HideAddProduct)

            modalcontainer.addEventListener('click',function(event){
                event.stopPropagation()
            })

        //<!--End Java script modal add -->



       // <!-- Java script modal edit -->

            const modalcontainer_edit = document.querySelector('.js-modal-edit-container')
            const editProductbtn = document.querySelectorAll('.js-add-edit-product')
            const modal_edit = document.querySelector('.js-modal-edit')
            const modalClose_edit =document.querySelector('.js-modal-edit-close')
            const modal_save_change=document.querySelector('.js-modal-savechange')


            function ShowEditProduct(){
                modal_edit.classList.add('open')
            }

            function HideEditProduct(){
                modal_edit.classList.remove('open')
            }

            modalClose_edit.addEventListener('click',HideEditProduct)

            editProductbtn.forEach((item) => {
                item.addEventListener('click', () => {
                    modal_edit.classList.add('open');
                })
            } )

            modal_save_change.addEventListener('click',HideEditProduct)

            modalcontainer_edit.addEventListener('click',function(event){
                event.stopPropagation()
            })

        //<!-- End Java script modal edit-->



        //<!-- Java script modal delete -->
    
            const modalcontainer_Dele = document.querySelector('.js-modal-delete-container')
            const Dele_acc_btn = document.querySelectorAll('.js-delete-acc')
            const modal_Dele = document.querySelector('.js-modal-delete')
            const modal_Cancel =document.querySelector('.js-modal-delete-close')
            const modal_deleted =document.querySelector('.js-modal-deleted')

            console.log(modalcontainer_Dele,Dele_acc_btn,modal_Cancel, modal_Dele)
    
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

        //<!-- End Java script modal delete -->