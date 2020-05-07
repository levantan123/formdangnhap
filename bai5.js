
document.addEventListener("DOMContentLoaded",function(){
	var dnht = document.getElementById('submit');
	var khoidn = document.getElementsByClassName('main');
	var khoidn = khoidn[0]; 

	dnht.onclick = function(){
		khoidn.classList.add('sora');
		dnht.classList.add('sora1');
	}
	 
	
	var fauser = document.getElementById('fa-user');
	var fapass = document.getElementById('fa-lock');
	var forgot = document.getElementById('forgot');
	var username = document.getElementsByClassName('username');
	var	password = document.getElementsByClassName('password');
	var login = document.getElementsByClassName('submit1');
	// var login = login[0];
	var oldpass = document.getElementById('passwordold');
	var	newpass = document.getElementById('passwordnew');

	var save = document.getElementsByClassName('save');
	// var save = save[0];
	// var x = document.querySelectorAll('button');
	// var y = document.querySelectorAll('input');
	// console.log(x);
	// console.log(y);
	forgot.onclick = function(){
		fauser.classList.add('sora1');
		fapass.classList.remove('fa-lock');
		login[0].classList.add('sora1');
		username[0].classList.add('sora1');
		password[0].classList.add('sora1');
		
	}
	

	var fatimes = document.getElementById('fa-times');
		fatimes.onclick = function(){
			khoidn.classList.add('sora1');
			dnht.classList.remove('sora1');
	}
},false);
