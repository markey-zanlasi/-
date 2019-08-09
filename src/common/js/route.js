function Router() {
    this.routers = {};
    this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
    this.routers[path] = callback || function() {};
}

Router.prototype.refresh = function() {
    this.currentUrl = window.location.hash.slice(1) || '/';
    this.routers[this.currentUrl]();
}

Router.prototype.init = function() {
    // window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

window.Router = new Router();
window.Router.init();

