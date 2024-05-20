function valida(){
   
 
   let email = document.getElementById("mail").value;
    let sp0 = document.getElementById("sp0"); 

    let sp1 = document.getElementById("sp1");
    let selector = document.getElementById("selector");

    let checkbox = document.getElementById("acepto");
    let sp2 = document.getElementById("sp2");


      /*valida un input type email*/
     if(email==""){
     sp0.style.display = "inline";
    }else{
        sp0.style.display = "none";
    }


      /*valida una lista desplegable select */

      if (selector.value === "") {
        sp1.style.display = "inline";
    } else {
        sp1.style.display = "none";
    }

      /*valida un input type checkbox*/
    if(checkbox.checked){
     sp2.style.display = "none";
    }else{
        sp2.style.display = "inline";
    }


    if(email != "" && checkbox.checked && selector.value !==""){
        document.fvalida.submit();
    }else{
        alert("Complete los campos obligatorios");
    }
}