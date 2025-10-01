import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BottoneCambioTema} from './bottone-cambio-tema/bottone-cambio-tema';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottoneCambioTema, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularProxyBootstrap');
}
