import { Injectable } from "@nestjs/common";
import { Product} from "./product.model";
@Injectable()
export class ProductsService{
products:Product[]=[];
insertProduct(title:string,desc:string,price:string){
    const ProId=new Date().toString();
    const newProduct = new Product( ProId,title,desc, price) ;
    this.products.push(newProduct);
    return ProId;
}
}