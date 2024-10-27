import { Routes } from '@angular/router';

export const routes: Routes = [
   {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                title: 'Hasina Niaina Snow',
                loadComponent: () => import('./layouts/home/home-layout.component').then(m => m.HomeLayoutComponent),
                children: [
                    {
                        path: '',
                        redirectTo: 'projects',
                        pathMatch: 'full'
                    },
                    {
                        path: 'projects',
                        title: 'Projects',
                        loadComponent: () => import('./modules/project/project.component').then(m => m.ProjectComponent)
                    },
                    {
                        path: 'resume',
                        title: 'Resume',
                        loadComponent: () => import('./modules/resume/resume.component').then(m => m.ResumeComponent)
                    },
                    {
                        path: 'contact',
                        title: 'Contact',
                        loadComponent: () => import('./modules/contact/contact.component').then(m => m.ContactComponent)
                    }
                ]
            },
            {
                path: '**',
                title: '404 : Page Not Found',
                loadComponent: () => import('./layouts/not-found/not-found-layout.component').then(m => m.NotFoundLayoutComponent),
            }
        ]
   }
];
