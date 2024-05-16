import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { TechnologyComponent } from './technology/technology.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'client', component: ClientComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'privacy-policies', component: PrivacyPoliciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
