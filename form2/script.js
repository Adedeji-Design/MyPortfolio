// shue-zeme

// We target all  the input boxes

function validateForm(){
  
  const firstName = document.forms['form1']['fname'].value;
  const lastName = document.forms['form1']['lname'].value;
  const email = document.forms['form1']['email'].value;
  const passWord = document.forms['form1']['password'].value;
  
  let properCase = passWord
  .toUpperCase(); 
  let isValid = true;
  // let approved = [passWord].value.length
  // console.log(approved);
  
  // if (approved < 8 || approved > 20 ){

 

  if(firstName == ''){
      // alert("First name must be filled")
      const display1 = document.getElementById('display1');
      display1.innerText = 'Required *'
      display1.style.color = 'white';
      display1.style.marginLeft = '70%';
      isValid = false
  }else{
    document.getElementById('display1').innerText = '';
  }

  if(lastName == ''){
    // alert("Last name must be filled")
    const display2 = document.getElementById('display2');
      display2.innerText = 'Required *'
      display2.style.color = 'white';
      display2.style.marginLeft = '70%';
      isValid = false;
  }else{
    document.getElementById('display2').innerText = '';
  }
  
  if(email == ''){
    // alert("This email field must be filled")
    const display3 = document.getElementById('display3');
    display3.innerText = 'Required *'
    display3.style.color = 'white';
    display3.style.marginLeft = '70%';
    isValid = false;
  }else{
    document.getElementById('display3').innerText = '';
  }
  if(passWord == ''){
    // alert("This email field must be filled")
      const display4 = document.getElementById('display4');
      display4.innerText = 'Required *'
      display4.style.color = 'white';
      display4.style.marginLeft = '70%';
      isValid = false;
  }else if(passWord.length < 6 || passWord.length > 20){
    const display4 = document.getElementById('display4');
    display4.innerText = 'password character(8 - 20) *'
    display4.style.color = 'white';
    display4.style.marginLeft = '10%';
    isValid = false;
  }else if(passWord.valueOf() == properCase ){
        display4.innerText = 'capital letter'
        isValid = false;
  }
   else
  {document.getElementById('display4').innerText = '';
  }
  return isValid;
  
}

function showPassword(){
const show = document.getElementById('show');
  if(show.type == 'password'){
      show.type = 'text'
  }else{
    show.type = 'password'
  }

}






// // Assignment
// Password not less than 8, not more than 20
// TemplateOnWeb.com