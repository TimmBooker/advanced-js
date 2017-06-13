var Page = function(template) {
	this.template = template;
}

Page.prototype.setData = function(data) {
	this.data = data;
}

Page.prototype.render = function(target) {
	this.element = document.createElement('DIV');
	// do more element creation, setting up data, etc...
	// uses this.data
	document.insertBefore(this.element, target);
}

Page.prototype.destroy = function() {
	this.element.parentNode.removeChild(this.element);
}

var todoList = new Page(templateId);
todoList.setData([1,2,3]);
todoList.render(document.getElementById('container'));










var pageManager = (function() {

	var pages = []

	function load(page) {
		pages.push(page);
	}

	function unload(page) {
		pages.filter(function(val) {
			return page !== val;
		});
	}

	function cache(page) {}

	return {
		load: load,
		unload: unload,
		cache: cache
	};

})();

pageManager.load(page);

pageManager.load(page1);
pageManager.load(todoList);













var prom = $.ajax({
	url: '/my-data.html',
	method: 'POST'
})

prom.then(function(response) {
	return $.ajax({
		url: '/my-data.html',
		method: 'POST'
	}
}).then(function(response) {
	return $.ajax({
		url: '/my-data.html',
		method: 'POST'
	}
}).then(function(response) {
	return $.ajax({
		url: '/my-data.html',
		method: 'POST'
	}
});

passToAnotherThingThatCares(prom);









$.ajax({
	url: 'users.json',
	method: 'POST'
}).on('success', function(data) {
	$.ajax({
		url: 'users.json',
		method: 'POST'
	}).on('success', function(data) {
		$.ajax({
			url: 'users.json',
			method: 'POST'
		}).on('success', function(data) {
			document.getElementById('content').innerHTML = response;
		}
	})
})











