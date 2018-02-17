export var Header = function () {

};

Vue.component('navigation', {
    props: ['item'],
    template:`
        <li>
            {{ item.region }}
        </li>
    `
});

let nav = new Vue({
    el: '#vue-nav', 
    data: {
        items: [
            { 
                id: 1,
                region: 'Seoul' 
            },
            { 
                id: 2,
                region: 'Jeolla' 
            },
            { 
                id: 3,
                region: 'Gyeongsang' 
            },
        ]
    }
});