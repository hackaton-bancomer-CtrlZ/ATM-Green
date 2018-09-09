const btnAccount = document.getElementById('cash');
const btnDeposite = document.getElementById('cashContinue');
const sig = document.getElementById('continue');

btnAccount.addEventListener('click', validateInpuntAccount => {
    const number = document.getElementById('accountDeposit').value;
    if (number.length < 10 ){
       console.log('Ingresa un numero de cuenta valido' )
    } else {
        console.log('numero valido')
        windows.assign('Colocar la vista a la pantalla correspondiente')
    }
});

btnDeposite.addEventListener('click', validateDeposite => {
   const amountDeposit = document.getElementById('depositAmount').value;
   if(!amountDeposit){
       console.log('Ingresa un monto')
   } else {
       console.log('Ingreso un monto valido')
       windows.assign('Colocar la vista a la pantalla correspondiente')
   }
});

const validatemail = () => {
  let cel = document.getElementById('num').value;

  if ( !(/^[0-9]{10}$/.test(cel))) {

    // Se maqueta error en rojo del input
    console.log('numero invalido');
  } else {
    // El número es correctamente ingresado
      console.log('numero valido');
  }

}

sig.addEventListener('click', validatemail, false);