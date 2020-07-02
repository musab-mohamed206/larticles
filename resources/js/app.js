require('./bootstrap');
require('./components/ExampleComponent.vue').default
window.Vue = require('vue');

Vue.component(
    'articles',
    require('./components/Articles.vue').default
);

Vue.component(
    'navbar',
    require('./components/Navebar.vue').default
);

var app = new Vue({
    el: '#app'
});
