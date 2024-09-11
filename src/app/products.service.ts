import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Injectable({
  providedIn: "root",
})

export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: "Figurine Astérix",
      desc: "Figurine en plastique d'Astérix, le personnage principal de la série. Le représente souvent dans sa pose emblématique, avec son casque ailé et sa ceinture.",
      price: 5,
      picture: "./assets/img/figurine-asterix-et-un-livre-la-galerie-des-personnages.jpg",
    },
    {
      id: 2,
      name: "Figurine Obélix",
      desc: "Figurine en plastique d'Obélix, le meilleur ami d'Astérix. Souvent représenté tenant un menhir ou un sanglier. Ici il porte un tas d'album.",
      price: 12.5,
      picture: "./assets/img/figurine-obelix-pile-d-albums.jpg",
    },
    {
      id: 3,
      name: "Set de figurines\nAstérix et Obélix",
      desc: "Contient des figurines d'Astérix et Obélix, ainsi que d'autres personnages de la série.",
      price: 8,
      picture: "./assets/img/figurine-asterix-obelix-panoramix-partie-d-echecs.jpg",
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }
}