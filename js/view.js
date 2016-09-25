/*  begin view  */
define(
    'view',
    [],
    function () {

		function View(model) {
			var self = this;

		function init() {
			var $tpl_src = $('#wrapper-template').html();
			var _tpl = _.template($tpl_src);

			$('body').append(_tpl);
			self.elements = {
				input: $('.item-value'),
				addBtn: $('.item-add'),
				listContainer: $('.item-list')
			};
			self.renderList(model.data);
			};

			self.renderList = function (data) {
				var $tpl_src = $('#list-template').html();
				var _tpl = _.template($tpl_src);
				self.elements.listContainer.html(_tpl({data}));
			};

			init();
			}
		return View;
    }
);