import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatSidenavModule, MatExpansionModule,
    MatIconModule, MatDividerModule, MatToolbarModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSidenavModule, MatExpansionModule, MatIconModule,MatDividerModule,MatTableModule,MatToolbarModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSidenavModule, MatExpansionModule, MatIconModule,MatDividerModule,MatTableModule,MatToolbarModule]
})
export class MaterialModule {

}