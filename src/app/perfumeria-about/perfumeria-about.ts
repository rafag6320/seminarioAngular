import { Component } from '@angular/core';

@Component({
  selector: 'app-perfumeria-about',
  standalone: false,
  templateUrl: './perfumeria-about.html',
  styleUrl: './perfumeria-about.scss'
})
export class PerfumeriaAbout {
  gallery: string[] = [
    "assets/img/about1.jpg",
    "assets/img/about2.jpg",
    "assets/img/about3.jpg",
    "assets/img/about4.jpg",
  ];
}
