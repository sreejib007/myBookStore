import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    console.log('route.params', route.params, state.root.queryParams)
    if(route.params.role ==="admin"){
        return true;
    }else{
        return false;
    }    
  }
}