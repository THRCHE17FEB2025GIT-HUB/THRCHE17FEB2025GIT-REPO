import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { UseStandaloneComponentInModuleComponent } from './use-standalone-component-in-module/use-standalone-component-in-module.component';
import { AuthGuardService } from './service/auth-guard.service';
// import routes from './app.routes';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'employees', component: ListEmpComponent, canActivate: [AuthGuardService]},
  {path: 'add', component: UpdateEmpComponent, canActivate: [AuthGuardService]},
  {path: 'update/:id', component: UpdateEmpComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: '**', component:LoginComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // The RouterMoudle is used to configure the Angular router. 
    // The RouterModule.forRoot() method is used to configure the Angular router with the routes defined in the routes array.
    // The RouterModule.forRoot() method takes a single argument, which is an array of Route objects. 
    // The RouterModule.forRoot() method returns a module that is configured with the routes defined in the routes array.
  ],
    // The Configured RouterModule should be exported from the AppRoutingModule module so that it can be imported into other modules.
  // The AppModule imports the AppRoutingModule module to configure the Angular router with the routes defined in the routes array.
  exports: [RouterModule]
})
export class AppRoutingModule { }
