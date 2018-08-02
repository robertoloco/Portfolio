var $email = $('form input[name="email"'); //change form to id or containment selector
var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
if ($email.val() == '' || !re.test($email.val()))
{
    alert('Please enter a valid email address.');
    return false;
}


