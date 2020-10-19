    // Criando a função validar do formulário.
    function validar() {
         let nome = document.getElementById('nome');
         let email = document.getElementById('email');
         let senha = document.getElementById('senha');

         alert(nome.value);

    }


    const btnEntrar = document.getElementById('btnEntrar');
          btnEntrar.addEventListener('click', validar);
      