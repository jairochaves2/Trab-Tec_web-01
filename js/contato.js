function valida() {
  if ((document.form1.nome.value.length == 0)&&
      (document.form1.mensagem.value.length == 0)&&
      (checarEmail()==false))
      {
        alert('Preencha todos os campos corretamente!');
        document.getElementById('setErroNome').innerHTML="Obrigatório!";
        document.getElementById('setErroMensagem').innerHTML="Obrigatório!";
        return false;
      }
  else
  {
    if ((document.form1.nome.value.length == 0))
    {
      alert('Preencha o campo Nome corretamente');
      document.getElementById('setErroNome').innerHTML="Obrigatório!";
      return false;
    }
    if ((document.form1.mensagem.value.length == 0))
    {
        alert('Preencha o campo Mensagem corretamente');
        document.getElementById('setErroMensagem').innerHTML="Obrigatório!";
        return false;
    }
    if (checarEmail()==false)
    {
      alert('Email incorreto!');
      return false;
    }
  }
}

function checarEmail()
{
  var expressaoRegular=/^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9\-\.]){1,}\.([A-Za-z]{2,4})$/;
  var e_mail=document.form1.email.value;

  if(expressaoRegular.test(e_mail)==false)
  	{
      document.getElementById('erroEmail').innerHTML="E-mail incorreto!";
      document.form1.email.style.borderColor="#be000b";
      return false;
  	}
    else
    {
      limpaErroEmail();
    }
}
function limpaErroEmail()
{
  var x=document.getElementById('erroEmail');
  if(x.innerHTML == "E-mail incorreto!")
  	{
      document.form1.email.style.borderColor="initial";
      x.innerHTML="";
  	}
}
