let title = {
    init: function() {
        this.run();
    },
    run: function() {
        let titleList = document.querySelectorAll('.title .title__title');
        let briefList = document.querySelectorAll('.title .title__brief');
        let descList = document.querySelectorAll('.title .title__desc');

        window.addEventListener('scroll', function() {
            titleList.forEach(value => {
                let offsetParent = value.offsetParent.offsetParent.offsetTop;
                let offsetChild = value.offsetTop;
                let total = offsetParent + offsetChild;

                if ((pageYOffset + this.innerHeight - 100) >= total) {
                    value.classList.add('active');
                }
            });

            briefList.forEach(value => {
                let offsetParent = value.offsetParent.offsetParent.offsetTop;
                let offsetChild = value.offsetTop;
                let total = offsetParent + offsetChild;

                if ((pageYOffset + this.innerHeight - 100) >= total) {
                    value.classList.add('active');
                }
            });

            descList.forEach(value => {
                let offsetParent = value.offsetParent.offsetParent.offsetTop;
                let offsetChild = value.offsetTop;
                let total = offsetParent + offsetChild;

                if ((pageYOffset + this.innerHeight - 100) >= total) {
                    value.classList.add('active');
                }
            })
        })
    }
}

title.init();
