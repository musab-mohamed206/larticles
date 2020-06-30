require('./bootstrap');

window.Vue = require('vue');

Vue.component(
    'articles',
    require('./components/Articles.vue')
);

var app = new Vue({
    el: '#app'
});