import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../home-report-dashboard/home-report-dashboard.module').then(
      //       (m) => m.HomeReportDashboardModule
      //     ),
      //   data: { name: 'id-management' },
      //   canActivate: [],
      // },
      // {
      //   path: 'id-management',
      //   loadChildren: () =>
      //     import('../id-card-management/id-card-management.module').then(
      //       (m) => m.IdCardManagementModule
      //     ),
      //   data: { name: 'id-management' },
      //   canActivate: [],
      // },
      // {
      //   path: 'bulk-id-download',
      //   loadChildren: () =>
      //     import('../bulk-id-card-download-management/bulk-id-card-download-management.module').then(
      //       (m) => m.BulkIdCardDownloadManagementModule
      //     ),
      //   data: { name: 'bulk-id-download' },
      //   canActivate: [],
      // },
      // {
      //   path: 'project-management',
      //   loadChildren: () =>
      //     import('../project-management/project-management.module').then(
      //       (m) => m.ProjectManagementModule
      //     ),
      //   data: { name: 'project-management' },
      //   canActivate: [],
      // },
      // {
      //   path: 'user-management',
      //   loadChildren: () =>
      //     import('../user-management/user.management.module').then(
      //       (m) => m.UserManagementModule
      //     ),
      //   data: { name: 'user-management' },
      //   canActivate: [],
      // },
      {
        path: '**', redirectTo: 'id-management',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
