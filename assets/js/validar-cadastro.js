function validarCadastro() {
    alert("Cadastro efetuado com sucesso!");
 }

 function validarForm() {
     if(document.getElementById("nome").value == 0){
        alert("o campo nome precisa ser preenchido."); 
        document.getElementById("nome").focus();
     return false;
        }
     else if(document.getElementById("cpf").value.length < 11){
        alert("O campo CPF precisa ser preenchido corretamente.");    
        document.getElementById("cpf").focus();
        return false;
           }
           else if(document.getElementById("rg").value == 0){
            alert("O campo RG precisa ser preenchido.");    
            document.getElementById("rg").focus();
            return false;
               }
               else if(document.getElementById("endereco").value == 0){
                  alert("O campo endereço  precisa ser preenchido.");    
                  document.getElementById("endereco").focus();
                  return false;
                     }
                     else if(document.getElementById("end-numero").value == 0){
                        alert("O campo número  precisa ser preenchido.");    
                        document.getElementById("end-numero").focus();
                        return false;
                           }
                           else if(document.getElementById("bairro").value == 0){
                              alert("O campo bairro precisa ser preenchido.");    
                              document.getElementById("bairro").focus();
                              return false;
                                 }
                                 else if(document.getElementById("cidade").value == 0){
                                    alert("O campo cidade precisa ser preenchido.");    
                                    document.getElementById("cidade").focus();
                                    return false;
                                       }
                                       else if(document.getElementById("estado").value == 0){
                                          alert("O campo estado precisa ser preenchido.");    
                                          document.getElementById("estado").focus();
                                          return false;
                                             }
                                             else if(document.getElementById("cep").value.length < 8){
                                                alert("O campo CEP precisa ser preenchido corretamente.");    
                                                document.getElementById("cep").focus();
                                                return false;
                                                   }
                                                   else if(document.getElementById("telefone").value.length < 10){
                                                      alert("O campo telefone precisa ser preenchido corretamente.");    
                                                      document.getElementById("telefone").focus();
                                                      return false;
                                                         }
                                                         else if(document.getElementById("celular").value.length < 11){
                                                            alert("O campo celular precisa ser preenchido corretamente.");    
                                                            document.getElementById("celular").focus();
                                                            return false;
                                                               }
                                                
           validarCadastro();
    }
    