$(document).ready(function() {

	var itemCount = 0;

	//Submitted Form Event
	$('#addTodoList').submit(addTodoListItem);
	$('#clearList').click(emptyTodoList);
	$('#clearCompletedList').click(removeCompletedTodoListItems)
	$('#todos').on('click', '.remove', removeTodoListItem);
	$('#todos').on('click', '.edit', editTodoListItem);
	$('#todos').on('blur', '.editor', saveEditedTodoListItem);
	$('#todos').on('click', 'li', markTodoListItemsCompleted)

	//Removed Item Event
	function addTodoListItem(e) {
		//Get val of input field
		var item = $('#addTodoItem').val();

	//Append item to ul list
		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

		console.log('addTodoItem');
		updateNumberofTodoListItems();
		e.preventDefault();
	}

	

	function removeTodoListItem() {
		$(this).parents('li').remove();
	}

	function editTodoListItem() {
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();
		$(editClicked).html('<form class="editor" action=""><input type="text" value="'+itemContent+'"></form');
	}

	function saveEditedTodoListItem() {
		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');
		$(listItem).html('<li><span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	}

	function markTodoListItemsCompleted() {
		$(this).toggleClass('done');
		updateNumberofTodoListItems();
	}

	function emptyTodoList() {
		$('#todos').empty();
		updateNumberofTodoListItems();
	}

	function removeCompletedTodoListItems() {
		console.log('urnning');
		$('.done').remove();
	}

	function updateNumberofTodoListItems() {
		var count = $('#todos li').not('.done').length;
		$('#count').html(count);
	}

});