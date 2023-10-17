            
    
    //MODAL Delete

            const modalcontainer_Dele = document.querySelector('.js-modal-delete-container')
            const Dele_order_btn = document.querySelectorAll('.js-delete-order')
            const modal_Dele = document.querySelector('.js-modal-delete')
            const modal_Cancel =document.querySelector('.js-modal-delete-close')
            const modal_deleted =document.querySelector('.js-modal-deleted')
            console.log(modalcontainer_Dele,Dele_order_btn,modal_Cancel, modal_Dele)

            function ShowAlertDelet(){
                modal_Dele.classList.add('open')
            }

            function HideAlertDelet(){
                modal_Dele.classList.remove('open')
            }

            Dele_order_btn.forEach((item) => {
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

    //MODAL Tình trạng giao hàng
            const modalcontainer = document.querySelector('.js-modal-container')
            const addDeliverytbtns = document.querySelectorAll('.js-add-delivery')
            const modal = document.querySelector('.js-modal')
            const modalClose =document.querySelector('.js-modal-close')

            function ShowAddProduct(){
                modal.classList.add('open')
            }

            function HideAddProduct(){
                modal.classList.remove('open')
            }

            modalClose.addEventListener('click',HideAddProduct)
            addDeliverytbtns.forEach((item) => {
                item.addEventListener('click', ShowAddProduct)
            } )
            modalcontainer.addEventListener('click',function(event){
                event.stopPropagation()
            })
        

    //Vòng tròn thống kê tình trạng giao hàng

        let circular_progress_1 = document.querySelector(".circular-progress-1"),
            progressValue_1 = document.querySelector(".progress-value-1"),

            circular_progress_2= document.querySelector(".circular-progress-2"),
            progressValue_2 = document.querySelector(".progress-value-2"),

            circular_progress_3 = document.querySelector(".circular-progress-3"),
            progressValue_3 = document.querySelector(".progress-value-3"),

            circular_progress_4 = document.querySelector(".circular-progress-4"),
            progressValue_4 = document.querySelector(".progress-value-4");

    //Giá trị hiển thị trên vòng
        let progressStartValue_1 = 0,
            progressEndValue_1 = 90,

            progressStartValue_2 = 0,
            progressEndValue_2 = 50,

            progressStartValue_3 = 0,
            progressEndValue_3 = 60,

            progressStartValue_4 = 0,
            progressEndValue_4 = 20,

            speed = 10;

    //xử lý dữ liệu đưa lên vòng tròn
        let progress1 = setInterval(() => {
            progressStartValue_1++;

            progressValue_1.textContent = `${progressStartValue_1}%`
            circular_progress_1.style.background = `conic-gradient(#ff6877, ${progressStartValue_1 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue_1 == progressEndValue_1){
                clearInterval(progress1)
            }
        }, speed);


        let progress2 = setInterval(() => {
            progressStartValue_2++;

            progressValue_2.textContent = `${progressStartValue_2}%`
            circular_progress_2.style.background = `conic-gradient(#008C45, ${progressStartValue_2 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue_2 == progressEndValue_2){
                clearInterval(progress2)
            }
        }, speed);


        let progress3 = setInterval(() => {
            progressStartValue_3++;

            progressValue_3.textContent = `${progressStartValue_3}%`
            circular_progress_3.style.background = `conic-gradient(#017cd4, ${progressStartValue_3 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue_3 == progressEndValue_3){
                clearInterval(progress3)
            }
        }, speed);


        let progress4 = setInterval(() => {
            progressStartValue_4++;

            progressValue_4.textContent = `${progressStartValue_4}%`
            circular_progress_4.style.background = `conic-gradient(#34334a, ${progressStartValue_4 * 3.6}deg, #ededed 0deg)`

            if(progressStartValue_4 == progressEndValue_4){
                clearInterval(progress4)
            }
        }, speed);
