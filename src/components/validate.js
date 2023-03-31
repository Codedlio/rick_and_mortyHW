
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexpassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,10}$/;
export  function validate(input){
    const errors = {}
   
  
    if (!regexEmail.test(input.email)) errors.email = 'Debe ser un correo electrónico valido';
    
    if (input.email.length===0) errors.email = 'Se requiere un correo electronico';
    
    if (input.email.length>35) errors.email = 'Maximo 35 caracteres';
    
    if (!regexpassword.test(input.password)) errors.password = 'La contraseña tiene que tener al menos un número';
    
    if (input.password.length<6 || input.password.length>10) errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.';
    return errors
}