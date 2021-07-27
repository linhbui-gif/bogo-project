// Tabbar Components
class TabbarComponent {
    constructor(){
        this._addEvent();
    }
    _addEvent(){
        let listCollapseBtn = document.querySelectorAll('[data-toggle="tabbar__collapse"]');
        for (let idx = 0; idx < listCollapseBtn.length; idx++) {
            let collapseBtn = listCollapseBtn[idx];
            let datatarget = collapseBtn.dataset.target;
            collapseBtn.addEventListener('click', function(){
                let activeIcon = collapseBtn.dataset.activeIcon;
                let inactiveIcon = collapseBtn.dataset.inactiveIcon;
                let activeClass = collapseBtn.dataset.activeClass;
                let inactiveClass = collapseBtn.dataset.inactiveClass;
                let targetElement = document.querySelector(datatarget);
                let parenttabbar = targetElement.parentNode.parentNode;
                let iconElement = collapseBtn.querySelector('i');
                // inactive all tabbar button
                let parentUl = collapseBtn.closest("ul");  
                let listBtnInTabbar = parentUl.querySelectorAll('[data-toggle="tabbar__collapse"]');
                for (let idx1 = 0; idx1 < listBtnInTabbar.length; idx1++) {
                    let tabBtnElm = listBtnInTabbar[idx1];
                    let tmpIconElement = tabBtnElm.querySelector('i');
                    tabBtnElm.classList.remove('active');
                    if (activeIcon && inactiveIcon) {
                        if (activeIcon && inactiveIcon) {
                            if (tmpIconElement) {
                                tmpIconElement.className = inactiveIcon;
                                let parent = tmpIconElement.parentNode;
                                if (inactiveClass) {
                                    parent.classList.add(inactiveClass);
                                    parent.classList.remove(activeClass);
                                }
                            }
                        }
                    }
                }
                // hide all content
                let listTabbarContent= parenttabbar.querySelectorAll('.tabbar__collapse');
                for (let idx2 = 0; idx2 < listTabbarContent.length; idx2++) {
                    let tabbarContentElm = listTabbarContent[idx2];
                    tabbarContentElm.classList.remove('show');
                }
                // active clicked button
                if (! collapseBtn.classList.contains('active')) {
                    collapseBtn.classList.add('active');
                }
                // active tabbar content
                targetElement.classList.toggle('show');               
                if (activeIcon && inactiveIcon) {
                    if (targetElement.classList.contains('show')) {
                        if (iconElement) {
                            let parent = iconElement.parentNode;
                            iconElement.className = activeIcon;
                            if (activeClass) {
                                parent.classList.add(activeClass);
                                parent.classList.remove(inactiveClass);
                            }
                            
                        }
                    } else {
                        if (iconElement) {
                            iconElement.className = inactiveIcon;
                            let parent = iconElement.parentNode;
                            
                            if (inactiveClass) {
                                parent.classList.add(inactiveClass);
                                parent.classList.remove(activeClass);
                            }
                            
                        }
                    }
                }
            })
        }
    }
}
let tabbar = new TabbarComponent();