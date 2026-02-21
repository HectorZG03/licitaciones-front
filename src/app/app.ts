import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './services/hello';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  message: string = '';

  constructor(private helloService: HelloService) {}

  loadHello() {
    this.helloService.getHello().subscribe({
      next: (response: string) => this.message = response,
      error: () => this.message = "Error al conectar con el backend"
    });
  }
}
