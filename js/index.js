// Overlay JS
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}





// Tab Nav system
class createTab {
    constructor(itemTab) {
        this.item = itemTab;

        this.itemTab = this.item.dataset.tab;

        this.tabInfo = document.querySelector(`.info[data-tab="${this.itemTab}"]`);
        console.log(this.tabInfo);

        this.tab = new Content(this.tabInfo);


        this.item.addEventListener('click', () => {
            this.itemClick();
            console.log('Item clicked');
        });
    }

    itemClick() {
        const item = document.querySelectorAll('.item');

        item.forEach(tabs => {
            tabs.classList.remove('selected')
        });

        this.item.classList.add('selected');

        this.tab.toggleContent()
    }
}

class Content {
    constructor(tab) {
        this.tabInfo = tab;
    }

    toggleContent() {
        const tabs = document.querySelectorAll('.info');

        tabs.forEach(tabs => {
            console.log('Items toggled', tabs);
            tabs.classList.remove('choose-tab')
        });

        console.log(this.tabInfo)

        this.tabInfo.classList.add('choose-tab');
    }
}

let items = document.querySelectorAll('.item');
items = Array.from(items).map(itemTab => new createTab(itemTab));