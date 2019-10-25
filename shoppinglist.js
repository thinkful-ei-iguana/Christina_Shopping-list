/* eslint-disable strict */
$(function () {

    $('#js-shopping-list-form').on('submit', function(event) {
      // this stops the default form submission behavior
      event.preventDefault();
      const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
  
      $("ul").append(
        "<li>" +
        `<span class="shopping-item">${userTextElement.val()}</span>` +
        `<div class="shopping-item-controls">` +
        `<button class="shopping-item-toggle">` +
        `<span class="button-label">check</span>` +
        `</button>` +
        `<button class="shopping-item-delete">` +
        `<span class="button-label">delete</span>` +
        `</button>` +
        `</div>` +
        "</li>"
      );
    });
  
    $('ul').on('click', '.shopping-item-delete', function (event) {
      let shoppingItemControls = $(this).parent();
      let li = shoppingItemControls.parent();
      li.remove();
    });
  
    $('ul').on('click', '.shopping-item-toggle', function (event) {
      let shoppingItemControls = $(this).parent();
      let li = shoppingItemControls.parent();
      let span = $(li).find('.shopping-item');
      span.toggleClass("strikeThrough");
    });
    
  });