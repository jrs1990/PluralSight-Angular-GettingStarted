import { Injectable } from "@angular/core";
import {  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate{
    
    constructor(private router: Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       let id = +route.url[1].path;
       if(isNaN(id) || id < 1){
           alert('invalid product id')
           this.router.navigate(['/products'])
           return false;
       }
        return true;
    } 
    
}