import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { MenubarModule } from "primeng/menubar";
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule } from "primeng/carousel";
import {ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import {RadioButtonModule } from "primeng/radiobutton";
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
