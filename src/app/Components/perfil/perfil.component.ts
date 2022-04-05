import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
nombre:string="";
apellidos:string = "";
email:string ="";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.nombre = String(localStorage.getItem("nombre")?.toString());
    this.apellidos = String(localStorage.getItem("apellidos")?.toString());
    this.email = String(localStorage.getItem("email")?.toString());
  }

  save(){
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(form => {
        if (form.checkValidity()) {
          localStorage.setItem("nombre", this.nombre);
          localStorage.setItem("apellidos", this.apellidos);
          localStorage.setItem("email", this.email);
          alert("Datos Guardados Correctamente");
        }
        form.classList.add('was-validated');
    });
  }

  salir()
  {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

}
