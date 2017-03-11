import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

const routes: Routes = [
    { path: '', component: WorkComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [WorkComponent],
    exports: [
        RouterModule
    ]
})
export class WorkModule { }
