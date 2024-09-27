import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  
  if (usuarioService.IsAuthenticated()) {
    //console.log(employeeService.IsAuthenticated());
    return true;
  } else {    
    return router.createUrlTree(['/login']); 
  }
};
