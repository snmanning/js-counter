const App = {
    count: 0,
    init() {
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    },
    cacheDom() {
        this.root = document.querySelector('#app');
        this.addBtn = this.root.querySelector('.inc');
        this.minusBtn = this.root.querySelector('.sub');
        this.display = this.root.querySelector('.display');
    },  
    bindEventListeners() {
        this.addBtn.addEventListener('click', this.addToCount.bind(this));
        this.minusBtn.addEventListener('click', this.subFromCount.bind(this));
    },
    addToCount() {
        this.count += 1;
        this.render();
    },
    subFromCount() {
        this.count -= 1;
        this.render();
    },
    render() {
        this.display.textContent = this.count;
    }
};

App.init();
window.App = App;
