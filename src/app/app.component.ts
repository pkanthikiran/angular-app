import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe} from '@angular/common';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component.component';
import {RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, CommonModule, ChildComponentComponent,  RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
  title = 'my-app';
  presentDate = new Date();
  a=11;
  b=12;
  c=this.a+this.b;
  z: number=factorial(5);
  w: number=greater(11,12);
  user: string = "";
}
function greater(x: number, y: number):any {
if(x>y)
  return x;
else
  return y;
}

function factorial(n: number):any {
  //throw new Error('Function not implemented.');
  if(n==0)
    return 1;
  else
    return n*factorial(n-1);
}

class CoffeeSwallower {
  name: string;

  constructor(name = "SpewCoffeeGalore") {
    this.name = name;
  }
}
class DataService {
  getData() {
    return "Kanthi";
  }
}
 