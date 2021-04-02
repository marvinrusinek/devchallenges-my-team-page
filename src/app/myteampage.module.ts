import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { MyteampageComponent } from './myteampage.component';
import { ContainerComponent } from './team-page/containers/container/container.component';
import { HeaderComponent } from './team-page/containers/header/header.component';
import { MainComponent } from './team-page/containers/main/main.component';
import { FooterComponent } from './team-page/containers/footer/footer.component';
import { LazyImgDirective } from './team-page/containers/main/lazy-img.directive';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'team-page',
    pathMatch: 'full'
  },
  {
    path: 'team-page',
    loadChildren: () =>
      import('./team-page/routing/teampage-routing.module').then(m => m.TeamPageRoutingModule)
  }
];


@NgModule({
  declarations: [
    MyteampageComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatCardModule
  ],
  providers: [],
  bootstrap: [MyteampageComponent]
})
export class MyteampageModule { }
