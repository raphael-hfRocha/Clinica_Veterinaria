/**
 * Confirmação de exclusão de usuário
 * @author Raphael Henrique
 */

 function confirmar(id_consulta)
 {
	 let resposta = confirm("Deseja excluir mesmo esse usuário?")
	 if(resposta === true)
	 {
		 /*alert(id_user)*/
		 
		 window.location.href = "delete?id_consulta=" + id_consulta
	 }
 }