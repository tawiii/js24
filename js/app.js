requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.12.0.min'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});
require(
    [
      'jquery', 'model', 'view', 'control'
    ],
    function (jquery, Model, View, Controller) {
        $(function () {
            var firstToDoList = ['one', 'name', 'haslo'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);
