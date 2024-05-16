import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { TechnologyComponent } from './technology/technology.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CareersComponent,
    ServicesComponent,
    ClientComponent,
    ProductsComponent,
    ContactComponent,
    TrainingComponent,
    TechnologyComponent,
    SecurityComponent,
    PrivacyPoliciesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
