
// checkbox
class CheckboxComponent {
    constructor(){
        this._addEvent();
    }
    _addEvent(){
        let listCheckbox = document.querySelectorAll('.box__input');
        if (listCheckbox) {
            for (let idx = 0; idx < listCheckbox.length; idx++){
                let checkboxElement = listCheckbox[idx];
                checkboxElement.addEventListener('change', function(){
                    let parent = this.parentNode;
                    let isCheck = this.checked;
                    let iconElement = parent.querySelector('i');
                    let active = iconElement.dataset.iconCheck;
                    let inActive = iconElement.dataset.iconUncheck;
                    let activeStyle = iconElement.dataset.classCheck;
                    let inActiveStyle = iconElement.dataset.classUncheck;
                    if (isCheck){
                        iconElement.className = active;
                        iconElement.classList.add(activeStyle);
                    } else {
                        iconElement.className = inActive;
                        iconElement.classList.add(inActiveStyle);
                    }
                })
            }
        }
    }
}
let checkbox = new CheckboxComponent();
