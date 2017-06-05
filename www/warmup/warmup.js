(function(){

  /*
   * Use Case:
   *
   * 1. User clicks on the "Change" button.
   *
   * 2. If the text input is blank then nothing changes.
   *
   * 3. Otherwise the contents of the <h1> element are replaced with the contents
   *    of the text input.
   *
   * 4. And the text input is cleared.
   *
   * 5. The user remains on the page in both cases.
   *
   * BONUS 1:
   *
   * Before step 3 above: Save the current text content of the <h1>
   * element by creating an <li> element.  Set the text content of the
   * <li> element to the text content of the <h1> element.  Find the
   * <ul> element with the ID of "history" and insert the new <li>
   * element as its first child.  Therefore, each time the <h1>
   * element is changed, its current value is prepended to the <ul>
   * element.
   *
   * BONUS 2:
   *
   * If one of the <li> elements inside the <ul> element from bonus 1
   * is clicked, update the text content of the <h1> element with the
   * text content of the clicked <li> element.
   */

   var changeButton = document.getElementById('the-button'),
      inputField = document.getElementById('new-text'),
      h1Element = document.getElementsByTagName('h1')[0],
      historyList = document.getElementById('history');

   changeButton.addEventListener('click', function(e) {

      // could have also just returned false
      e.preventDefault();

      console.log('Clicked');

      if (!inputField.value) {
         return false;
      }

      h1Element.innerHTML = inputField.value;

      // Bonus 1: we could set the inner HTML
      //historyList.innerHTML = historyList.innerHTML + '<li>' + inputField.value + '</li>';

      // Bonus 1: or go through the process of creating and appending new nodes
      var newLiNode = document.createElement('li');
      var newTextNode = document.createTextNode(inputField.value);
      newLiNode.appendChild(newTextNode);
      historyList.prepend(newLiNode); // prepend() is not ie-safe

      // Bonus 2:
      newLiNode.addEventListener('click', function(e) {
         h1Element.innerHTML = this.innerText;
      });

      inputField.value = null;

   });


})();
