// JavaScript Document
function WithoutContent(ss) {
	if(ss.length > 0) { return false; }
	return true;
}

function NoneWithContent(ss) {
	for(var i = 0; i < ss.length; i++) {
		if(ss[i].value.length > 0) { return false; }
	}
	return true;
}

function NoneWithCheck(ss) {
	for(var i = 0; i < ss.length; i++) {
		if(ss[i].checked) { return false; }
	}
	return true;
}

function WithoutCheck(ss) {
	if(ss.checked) { return false; }
	return true;
}

function WithoutSelectionValue(ss) {
	for(var i = 0; i < ss.length; i++) {
		if(ss[i].selected) {
			if(ss[i].value.length) { return false; }
		}
	}
	return true;
}

function confirmDelete(){
	if(confirm('Are you sure you want to delete this entry?')){
		return true;
	} else return false;
}

function onlyNumbers(field){
	var checkOK = "0123456789.";
	var checkStr = field;
	var allValid = true;
	for (i = 0;  i < checkStr.length;  i++){
		ch = checkStr.charAt(i);
		for (jk = 0;  jk < checkOK.length;  jk++){
			if (ch == checkOK.charAt(jk)){
				break;
			}
			if(jk == (checkOK.length-1) && ch != checkOK.charAt(jk)){
				allValid = false;
			}
		}
		if(!allValid){
			break;
		}
	}
	return allValid;
}

function editorCheck(editors,target){
	var isDirty = false;
	for (var i=0, len=editors.length; i<len; ++i ){
 		var editor = CKEDITOR.instances[editors[i]];
 		
 		if(editor.checkDirty()){
 			isDirty = true;
 			break;
 		}
	}
	if(isDirty){
		if(confirm("Are you sure you want to go back to the site without saving your changes?")){
			window.location = target;
		}
	} else {
		window.location = target;
	}
}



function checkUncheckAll(theForm,theElement) {
	for(z=0; z<theForm.length;z++){
		if(theForm[z].type == 'checkbox'){
			theForm[z].checked = theElement.checked;
		}
	}
}