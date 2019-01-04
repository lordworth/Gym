import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatSidenavModule, MatExpansionModule,
    MatIconModule, MatDividerModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSidenavModule, MatExpansionModule, MatIconModule,MatDividerModule,MatTableModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSidenavModule, MatExpansionModule, MatIconModule,MatDividerModule,MatTableModule]
})
export class MaterialModule {

}