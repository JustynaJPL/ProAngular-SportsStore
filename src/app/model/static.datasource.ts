import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model"

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
    new Product(2, "Produkt 2", "Kategoria 1", "Produkt 2 (Kategoria 1)", 100),
    new Product(3, "Produkt 3", "Kategoria 1", "Produkt 3 (Kategoria 1)", 100),
    new Product(4, "Produkt 4", "Kategoria 1", "Produkt 4 (Kategoria 1)", 100),
    new Product(5, "Produkt 5", "Kategoria 1", "Produkt 5 (Kategoria 1)", 100),
    new Product(6, "Produkt 6", "Kategoria 1", "Produkt 6 (Kategoria 1)", 100),
    new Product(7, "Produkt 7", "Kategoria 1", "Produkt 7 (Kategoria 1)", 100),
    new Product(8, "Produkt 8", "Kategoria 1", "Produkt 8 (Kategoria 1)", 100),
    new Product(9, "Produkt 9", "Kategoria 1", "Produkt 9 (Kategoria 1)", 100),
    new Product(10, "Produkt 10", "Kategoria 2", "Produkt 10 (Kategoria 2)", 100),
    new Product(11, "Produkt 11", "Kategoria 2", "Produkt 11 (Kategoria 2)", 100),
    new Product(12, "Produkt 12", "Kategoria 2", "Produkt 12 (Kategoria 2)", 100),
    new Product(13, "Produkt 13", "Kategoria 2", "Produkt 13 (Kategoria 2)", 100),
    new Product(14, "Produkt 14", "Kategoria 2", "Produkt 14 (Kategoria 2)", 100),
    new Product(15, "Produkt 15", "Kategoria 2", "Produkt 15 (Kategoria 2)", 100),
    new Product(16, "Produkt 16", "Kategoria 2", "Produkt 16 (Kategoria 2)", 100),
    new Product(17, "Produkt 17", "Kategoria 2", "Produkt 17 (Kategoria 2)", 100),
    new Product(18, "Produkt 18", "Kategoria 3", "Produkt 18 (Kategoria 3)", 100),
    new Product(19, "Produkt 19", "Kategoria 3", "Produkt 19 (Kategoria 3)", 100),
    new Product(20, "Produkt 20", "Kategoria 3", "Produkt 20 (Kategoria 3)", 100),
    new Product(21, "Produkt 21", "Kategoria 3", "Produkt 21 (Kategoria 3)", 100),
  ];

  getProducts(): Observable<Product[]>{
  	return Observable.from([this.products]);
  }
  saveOrder(order:Order):Observable<Order>{
    console.log(JSON.stringify(order));
    return Observable.from([order])

  }

}