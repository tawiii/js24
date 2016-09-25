/*begin controller*/
define(
    'control', ['model', 'view'],
    function () {
		function Controller(model, view) {
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item-edit', showItem);


		function addItem() {
			var newItem = view.elements.input.val();
			model.addItem(newItem);
			view.renderList(model.data);
			view.elements.input.val('');
			}

		function removeItem() {
			var item = $(this).attr('data-value');
			model.removeItem(item);
			view.renderList(model.data);
			}

		function showItem() {
			var item = $(this).attr('data-value');
			var input = $(this).parent().find('.item-input').show();
			var hide = $(this).parent().find('.hide-text').hide()
			$('.item-input').on('blur', editItem);
			}

		function editItem() {
			var val = $(this).val();
			var attr  = $(this).parent().find('.item-edit').attr('data-value');
			model.editItem(val, attr)
			view.renderList(model.data);
			}
		}
	return Controller;
    }
);