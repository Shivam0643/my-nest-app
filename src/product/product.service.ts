/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id: 1, name:"Mobile", price:2000},
        {id: 2, name:"Laptop", price:4000},
        {id: 3, name:"Lablet", price:8000}, 
    ];

    getAllProducts(){
        return this.products;
    }
    getProductById(id:number){
        return this.products.find((product) => 
        product.id === id)
    }
}
