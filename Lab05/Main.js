function validateForm() {
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;
  
    var modalMessage = document.getElementById('modal-message');
  
    if (input1Value === '' || input2Value === '') {
      modalMessage.textContent = 'Please fill in all fields';
    } else {
      // Form is valid, you can proceed with further actions
      modalMessage.textContent = 'Form submitted successfully!';
    }
  
    // Open the Bootstrap modal
    $('#alertModal').modal('show');
}
  