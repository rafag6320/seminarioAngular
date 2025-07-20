import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PerfumeList } from './perfume-list/perfume-list';

import { FormsModule } from '@angular/forms';
import { Cart } from './cart/cart';
import { PerfumeriaAbout } from './perfumeria-about/perfumeria-about';
import { PerfumeriaPerfumes } from './perfumeria-perfumes/perfumeria-perfumes';
import { InputInteger } from './input-integer/input-integer';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    App,
    PerfumeList,
    Cart,
    PerfumeriaAbout,
    PerfumeriaPerfumes,
    InputInteger,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
