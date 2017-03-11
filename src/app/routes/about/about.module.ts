import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: AboutComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [AboutComponent],
    exports: [
        RouterModule
    ]
})
export class AboutModule { }
