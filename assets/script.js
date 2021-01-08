var app = new Vue({
    el: '#app', // Bind the app to the div with id "app"
    vuetify: new Vuetify(),
    data: {
      imagePath: '',
      paper: null, 
      circle: null
    },
    // The "created" function runs when the page loads
    mounted() {
        // Create and store the Paper instance in a Vue variable (this.paper)
        this.paper = paper.setup(document.getElementById('view'));
        this.circle = this.paper.Path.Circle({
            center: this.paper.view.center,
            radius: 60,
            strokeWidth: 3,
            strokeColor: 'red'
        });
    },
    methods: {
        up: function() {
            this.circle.position.y -= 10;
        },
        down: function() {
            this.circle.position.y += 10;
        },
        left: function() {
            this.circle.position.x -= 10;
        },
        right: function() {
            this.circle.position.x += 10;
        },
        larger: function() {
            this.circle.scale(1 * 1.1); 
        },
        smaller: function() {
            this.circle.scale(1 / 1.1); 
        }
    }
});