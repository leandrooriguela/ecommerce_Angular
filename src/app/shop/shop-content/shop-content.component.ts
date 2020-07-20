import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  qtdeProdutos: number = 200;

  produtos: {nome, preco}[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.produtos = new Array<{ nome, preco }>();
    this.produtos.push({ nome: 'Bateria', preco: 100.70});
    this.produtos.push({ nome: 'Rádio', preco: 99.70});
    this.produtos.push({ nome: 'TV', preco: 100.00});
  }

  getQtdeProdutos(): number {
    return this.qtdeProdutos;
  }
}
