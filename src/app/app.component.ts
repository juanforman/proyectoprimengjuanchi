import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoprimengjuanchi';
  items: MenuItem[]=[];
  ngOnInit(){
    this.items = [
      {
        label: 'inicio', 
        icon: 'pi pi-fw pi-home',
        routerLink: "inicio"
      },

      {
        label: "productos",
        icon: "pi pi-fw pi-shopping-cart",
        routerLink: "productos"
      },

      {
          label: 'contacto',
          icon: 'pi pi-fw pi-user',
          routerLink: "contacto"
      }
  ];
  }
}
