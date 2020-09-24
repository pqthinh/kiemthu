$(document).ready(function() {
	$("#Name").dblclick(()=>{
		alert($("#Name").val())
	})
})

function isName(){
	const reg = /^[a-zA-Z ]+$/
	return reg
}

function validate(id, reg) {
    name = $(id).val()
    
    if(reg.test(name)) {
	  fixName(name, id)
	  reset(id)
      return 1
	}
	inofication(id)
	return 0
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
function inofication(id) {
	err=""
	$(id).removeClass('success')
	$('i').remove()
	$(id).addClass('error')
	if(id=="#Name") err = "Ten khong bao gom so va ky tu dac biet"

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