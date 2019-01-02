import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { TrainingComponent } from './training/training.component'

@NgModule({
    imports: [RouterModule.forRoot([{ path: "", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "training", component: TrainingComponent }])],
    exports: [RouterModule]
})
export class AppRoutingModule { }