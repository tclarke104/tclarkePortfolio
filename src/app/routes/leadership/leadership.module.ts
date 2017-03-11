import { NgModule } from '@angular/core';
import { LeadershipComponent } from './leadership/leadership.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LeadershipComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [LeadershipComponent],
    exports: [
        RouterModule
    ]
})
export class LeadershipModule { }
