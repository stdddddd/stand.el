function ValidForm(data) {
	if (data.name != null && data.name.value.length < 2 )
	{
	alert('Заполните свое имя!');
	return false;}

	if (data.sname != null && data.sname.value.length < 2 )
	{
	alert('Заполните свою фамилию!');
	return false;}

	if (data.tname != null && data.tname.value.length < 2 )
	{
	alert('Заполните свое отчество!');
	return false;}

	var element = document.querySelector('input[type=checkbox]');  
    var re = /^[\wа-яА-Я]{1}[\w-\.а-яА-Я]*@[\w-а-яА-Я]+\.[a-zа-я]{2,4}$/i;  
    var myMail = document.getElementById('formEmail').value;
    var valid = re.test(myMail);
    if (valid === false) {
     	alert('Адрес электронной почты введен неправильно!');
     	return false;
    }
    if(data.phone != null && data.phone.value.length == 0)
    {
    alert('Не введен номер телефона!');
    return false;}
      
    if(data.phone != null && data.phone.value.length < 5)
    {
    alert('Номер телефона введен неправильно!');
    return false;}

    if (data.message != null && data.message.value.length < 3)
    {
    alert('Заполните поле "Сообщение"!');
    return false;}

    if (element.checked) return true
    else {
    	alert('Чтобы отправить сообщение, нужно согласиться с условиями!');
    	return false;
    }

}