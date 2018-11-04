import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {

  private errorMessage: any;

  constructor(private productService: ProductService){

  }

  
  onRatingClicked(messge: string) : void{
    this.pageTitle = 'Product List: ' + messge;
  }

  peformFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => 
                                  product.productName.toLowerCase().indexOf(filterBy) !== -1)
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
      
    );
    
  }

    pageTitle: string = 'Product List';
    imageWidth: number = 30;
    imageMargin: number = 2;
    
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter=value;
      this.filteredProducts = this.listFilter ? this.peformFilter(this.listFilter) : this.products; 
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    showImage: boolean = false;



}
