import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';

@NgModule({
  declarations: [	
    AppComponent,
    ProjetosComponent,
      DesenvolvedoresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
