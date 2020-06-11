(function(){
	var modalContainer = [...document.querySelectorAll('.modal-container')];

  //show modal 
  var modalButton = [...document.querySelectorAll('.modal-button')];
	modalButton.forEach(function(btn){
		btn.onclick = function() {
			var modal = btn.getAttribute('data-modal');
			document.getElementById(modal).style.display = "block";
		}
    });
    
  //hide modal
  var closeButton = [...document.querySelectorAll(".modal-close")]
  closeButton.forEach(function(btn) {
      btn.onclick = function() {
        var modal = btn.closest('.modal-container');
        modal.style.display = 'none';
      }
  });
  
  //close modal when user clicks outside the modal
  window.onclick = function(e) {
    if (e.target.className === "modal-container") {
        e.target.style.display = 'none';
    }
  };

})();



