import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos=[
    {
      name:"Butaca 1.4 milla Nick",
      price:"30.000",
      img:"https://http2.mlstatic.com/D_NQ_NP_987684-MLA49005054786_022022-V.webp",
    },

    {
      name:"Reloj Presion de aceite",
      price:"2.704",
      img:"https://http2.mlstatic.com/D_NQ_NP_721440-MLA40787433401_022020-V.webp",
    },

    {
      name:"Volante Collino",
      price:"27.822",
      img:"https://http2.mlstatic.com/D_NQ_NP_619278-MLA47935097102_102021-V.webp",
    },

    {
      name:"Buzo Antiflama At Racing",
      price:"46.292",
      img:"https://http2.mlstatic.com/D_NQ_NP_981238-MLA40777013965_022020-V.webp",
    },

    {
      name:"Casco para automovilismo Bell RS7 Pro",
      price:"429.000",
      img:"https://http2.mlstatic.com/D_NQ_NP_679382-MLA47134654158_082021-V.webp",
       
    },

    {
      name:"Botas Omp One S Homologadas",
      price:"144.714",
      img:"https://http2.mlstatic.com/D_NQ_NP_965218-MLA50545354952_072022-V.webp",
       
    }
    

  ]
  responsiveOptions=[
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
