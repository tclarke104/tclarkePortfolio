import { NgModule } from '@angular/core';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: VolunteeringComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [VolunteeringComponent],
    exports: [
        RouterModule
    ]
})
export class VolunteeringModule { }
