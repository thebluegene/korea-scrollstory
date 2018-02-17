export var LocalSection = function (localData ,title) {
    this.data = localData;
    this.title = title
    this.active = 0;
};

LocalSection.prototype.updateVue = function(active) {
    app.city = this.title;
    app.location = this.data;
    this.active = active;
};


Vue.component('location-content', {
    props: ['place'],
    template: `
        <li>
            <div class="hero-image" :style="{ 'background-image': 'url(' + place.hero + ')' }">
                <h4>{{ place.name }}</h4>
            </div>
            <div class="">
                <p>{{ place.text }}</p>
            </div>
        </li>
    `
});

let app = new Vue({
    el: '#vue-content', 
    data: {
        city: '',
        location: []
    }, 
    methods: {
        next: function() {
            this.currentImage++;
        }
    }
});