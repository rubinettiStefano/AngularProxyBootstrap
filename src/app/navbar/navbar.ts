import { Component } from '@angular/core';
import {BottoneCambioTema} from "../bottone-cambio-tema/bottone-cambio-tema";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    BottoneCambioTema,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  protected readonly RouterLink = RouterLink;
  protected readonly screenLeft = screenLeft;
  protected readonly Component = Component;
}
