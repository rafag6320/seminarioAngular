import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfumeriaPerfumes } from './perfumeria-perfumes/perfumeria-perfumes';
import { PerfumeriaAbout } from './perfumeria-about/perfumeria-about';
import { Contact } from './contact/contact';

const routes: Routes = [
  {path: '', component: PerfumeriaPerfumes},
  {path: 'perfumes', component: PerfumeriaPerfumes},
  {path: 'about', component: PerfumeriaAbout},
  {path: 'contacto', component: Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
