    // Criando a função validar do formulário.
    function validar() {

        /*Definição de variáveis*/
        var nome;
        var email;
        var senha;

        /* Aqui, estou criando variaveis locais, como: nome,email e senha para receber as referências dos valores
           que estão dentro das tag name="" localizadas no formulário html.  
        */ 
            nome =  document.f_validar._nome.value;
            email = document.f_validar._email.value;
            senha = document.f_validar._senha.value;

        /*Validações de campos : Nome, E-mail e Senha do usuário.*/

        if (nome == ''){
            alert('Favor, Digite seu nome!!!');
            /*O método HTMLElement.focus()  seta o foco em um determinado elemento em especifico, 
              caso esse elemento permita ter o foco neste elemento
            */
            document.f_validar._nome.focus();
            return false;
        }
        
        /*O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, 
          retorna -1 caso o mesmo não esteja presente.
        */
        if (email == '' || email.indexOf('@') == -1 || email.indexOf('.') == -1){
            alert('Favor. Informe um E-MAIL válido!!!');
            document.f_validar._email.focus();
            return false;
        }

        if (senha.length < 6 || senha == ''){
            alert('Digite uma senha acima de 6 caracteres.');
            document.f_validar._senha.focus();
            return false;
        } 
    }