// $(document ).ready(function() {

var user_name;
var pw;
var submit=document.getElementById('submit');
var user_date;
var typed;

function validate() {
	checkdate()
	checkpassword()
	checkusername()
}

function checkdate() {
	user_date=document.getElementById("date").value;
	if(user_date.length ==10){
		num_array=user_date.split("/");
		console.log(num_array);
		var month=parseInt(num_array[0]);
		var day=parseInt(num_array[1]);
		var year=parseInt(num_array[2]);
		console.log(month);
		console.log(day);
		console.log(year);
	}
	
	if(month > 0 && month <= 12){
	 
	}else{
		alert("This is not a valid month");
	}

	if(day > 0 && day >= 31){
	}else{
		("This is not a valid day");
	}

	if(year >= 1000 && year <=2050){
		
	}else{
		alert("This is not a valid year!");
	}

}

function checkpassword() {
	pw=document.getElementById('password').value
	if(pw !="1234") {
		alert("Invalid Password!");
	}
}

function checkusername(){
	user_name=document.getElementById("username").value
	if(user_name==''){
		alert("You must add in a username!");
	}
}

function press(){
	num_or_letter()
}

function num_or_letter(){
	typed=document.getElementById("output").value;
	console.log(typed);
	if(isNaN(typed)){
		document.getElementById("user_type").innerText="LETTER";
	}else{
		document.getElementById("user_type").innerText="NUMBER";
	}
}



