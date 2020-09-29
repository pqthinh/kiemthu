$(document).ready(function() {
	$("#Name").dblclick(()=>{
		alert($("#Name").val())
	})
})
// Check Fullname
function isName(){
	const reg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
	id="#Name"
	name = $(id).val()
	if(name=="") return false
	if(!reg.test(name)) {
		fixName(name, id)
		return true;
	}
	return false
}

function fixName(name, id) {
	dname = name;
	ss = dname.split(' ')
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " "
			dname = dname + ss[i].substring(0, 1).toUpperCase()
			dname = dname + ss[i].substring(1).toLowerCase()
		}

	$(id).val(dname)
}

// Check Email // lib js

function isEmail() {
	id= "#Email"
	return document.querySelector(id).validity.valid
}

function isPassword() {
	id='#Password'
	pass = $(id).val()
	if(pass.length>=6) return true;
	return false;
}

function checkRePassword() {
	id='#Re_Password'
	repass = $(id).val()
	pass = $('#Password').val()
	if(isPassword()) {
		if(pass==repass) return true;
	}
	return false;
}

function validate(id, condition) {
    
    if(condition) {
	  reset(id)
      return 1
	}
	inofication(id)
	return 0
}

function inofication(id) {
	err=""
	$(id).removeClass('success')
	$('i').remove()
	$(id).addClass('error')
	if(id=="#Name") err = "Ten khong bao gom so va ky tu dac biet"
	if(id == "#Email") err = "Email ban nhap khong dung dinh dang"
	if(id=="#Password") err= "Mat khau phai co it nhat 6 ky tu"
	if(id=="#Re_Password") err="Nhap khong khop hoac mat khau ko du 6 ky tu"
	
	idAlert = id.toLowerCase()+'Help'
	$(idAlert).remove()

	$(id).after(`<small id="${idAlert.substring(1)}" class="form-text text-muted alert">${err}</small>`)

	// $(idAlert).html(err)
	// $(idAlert).addClass('alert')
}
function reset(id) {
	$(id).removeClass('error')
	$(id).addClass('success')
	
	$('i.success').remove()

	idHelp = id.toLowerCase()+'Help'
	
	// alert(id+ err)  // check id , alert

	$(idHelp).remove()

	$(id).after(`<i class="success fas fa-check"></i>`)
	$('i.success').css({
		'position': 'absolute',
		'top': '33px',
		'right': '11px',
		'width': '20px',
		'height':'20px',
		'background': 'url("https://previews.123rf.com/images/rimmart/rimmart1910/rimmart191000290/132971810-green-check-mark-icon-checkmark-in-circle-for-checklist-tick-icon-green-colored-in-flat-style-vector.jpg") no-repeat',
		'background-size':'cover',
		'border-radius': '50%'
	})
	// $(id).html("")
	// $(id).removeClass('error')
}