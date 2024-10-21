import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  title = 'proyecto1';
  nombre: string ='Isabella';
  edad: number = 18;
  imagen = 'wallpaperbetter.jpg';
  contador: number = 0;
  nombreC: String = ''
  onClick(){
    alert("pagame");
  }
  incre(){
  this.contador ++; 
  }
  decre(){
    this.contador--;
  }
}
