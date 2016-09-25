/* begin model */

function Model(data) {
	var self = this;

	self.data = data;

	self.addItem = function (item) {
	if (item.length === 0){
	return;
	}

	self.data.push(item);

	return self.data;
	};

	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

	if (index === -1){
	return;
	}
	self.data.splice(index, 1);
	return self.data;
	};

	self.editItem = function (val, attr) {
		var index = self.data.indexOf(attr);
		self.data.splice(index, 1, val);
		return self.data;
	}
}

/*  begin view  */

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

/*begin controller*/

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

/* anonymous function */

$(function () {
	var firstToDoList = ['one', 'name', 'haslo'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});