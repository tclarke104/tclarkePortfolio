import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
            { path: 'leadership', loadChildren: './leadership/leadership.module#LeadershipModule' },
            { path: 'volunteering', loadChildren: './volunteering/volunteering.module#VolunteeringModule' },
            { path: 'work', loadChildren: './work/work.module#WorkModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
