import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  images= [
    {
      url:"https://http2.mlstatic.com/D_NQ_NP_603207-MLA47934148100_102021-O.webp",
      alt:"Butaca de competicion"
    },

    {
      url:"https://http2.mlstatic.com/D_NQ_NP_938921-MLA27119077627_042018-V.jpg",
      alt:"Cinto de competicion"
    },

    {
      url:"https://static.wixstatic.com/media/ece211_cbd10e45c2444717ab7843e6124e038a~mv2.jpg/v1/fill/w_435,h_373,al_c,q_85,usm_0.66_1.00_0.01/ece211_cbd10e45c2444717ab7843e6124e038a~mv2.jpg",
      alt:"Tacometro de competicion"
    },

    {
      url:"https://http2.mlstatic.com/D_NQ_NP_752010-MLA45549638472_042021-O.webp",
      alt:"Pedalera de competicion"
    },

    {
      url:"https://http2.mlstatic.com/D_NQ_NP_887391-MLA44216202397_122020-O.webp",
      alt:"Selectora de cambios de competicion"
    }
  ]

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
