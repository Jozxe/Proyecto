import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string ="";
  user:string ="";
  pass:string ="";

   constructor(private router:Router)
  {
  }

  ngOnInit(): void {
  }

  Ingresar(){
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(form => {
        if (form.checkValidity()) {
          if(this.user === "user" || this.pass === "root"){
            this.message = "";
            localStorage.setItem("user", "user");
            this.router.navigate(['/home']);
          }else{
            this.message = "Credenciales no validas";
          }
        }
        form.classList.add('was-validated');
    });
  }

}
