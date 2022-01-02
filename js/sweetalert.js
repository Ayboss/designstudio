function sweetalertButton(){
  Swal.fire({
    title: 'Oops, sorry!',
    text: 'Registration is currently off',
    icon: 'warning',
    confirmButtonText: 'Cancel!'
  })
}

function sweetalertUnav(){
  Swal.fire({
    title: 'Sorry!',
    text: 'UDS manager is currently unavailable',
    icon: 'error',
    confirmButtonText: 'Okay!'
  })
}