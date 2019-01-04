import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { TrainingComponent } from './training/training.component';
import { LandAddComponent } from './rental/land/land-add/land-add.component';
import { LandDashboardComponent } from './rental/land/land-dashboard/land-dashboard.component';
import { LandEditComponent} from './rental/land/land-edit/land-edit.component';
import { LandSetbuildingComponent} from './rental/land/land-setbuilding/land-setbuilding.component';

@NgModule({
    imports: [RouterModule.forRoot([{ path: "", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    {
        path: "welcome", component: WelcomeComponent, children: [
            { path: "land/dashboard", component: LandDashboardComponent },
            { path: "land", component: LandDashboardComponent },
            { path: "land/add", component: LandAddComponent },
            { path: "land/edit", component: LandEditComponent },
            { path: "land/setbuilding", component: LandSetbuildingComponent }
        ]
    },
    { path: "training", component: TrainingComponent }])],
    exports: [RouterModule]
})
export class AppRoutingModule { }