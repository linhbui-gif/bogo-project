let modal = {
    init: function(modalId, buttonId) {
        this.run(modalId, buttonId);
    },
    run: function(modalId, buttonId) {
        let btn = document.getElementById(buttonId);
        let getModalWrap = document.getElementById(modalId);
        let getModal = getModalWrap.querySelectorAll('.modal');
        btn.addEventListener('click', function () {
            getModalWrap.classList.add('active');
            getModal[0].classList.add('active');
        });

        let clickToClose = getModalWrap.querySelector('.clickToClose');
        clickToClose.addEventListener('click', function () {
            getModalWrap.classList.remove('active');
            getModal.forEach(value => {
                value.classList.remove('active');
            });
        });

        let lengthModal = getModal.length;
        getModal.forEach((value, index) => {

            let close = value.querySelector('.modal .modal__close .modal__close-icon');
            close.addEventListener('click', function () {
                getModalWrap.classList.remove('active');
                value.classList.remove('active');
            });

            let closeBtn = value.querySelector('.modal__btn .modal__btn-next');
            closeBtn.addEventListener('click', function () {
                value.classList.remove('active');
                if (index < lengthModal - 1) {
                    getModal[index + 1].classList.add('active');
                }
                if (index == lengthModal - 1) {
                    getModalWrap.classList.remove('active');
                    value.classList.remove('active');
                }
            });

            let prev = value.querySelector('.modal__btn .modal__btn-prev');
            prev.addEventListener('click', function () {
                value.classList.remove('active');
                if (index > 0) {
                    getModal[index -1].classList.add('active');
                }
            });
        });
    }
};

//modal.init('modal', 'btn');