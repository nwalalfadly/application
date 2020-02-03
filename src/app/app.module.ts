import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './contact/login/login.component';
import { JoingComponent } from './components/joing/joing.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RegisterComponent } from './contact/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
import { JoursComponent } from './components/jours/jours.component';
import { GestionaireComponent } from './components/gestionaire/gestionaire.component';
import { MealsComponent } from './components/meals/meals.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ExercicecoachComponent } from './components/exercicecoach/exercicecoach.component';
import { SportComponent } from './components/sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    JoingComponent,
    CalculatorComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    TableComponent,
    ErrorComponent,
    JoursComponent,
    GestionaireComponent,
    MealsComponent,
    ExerciceComponent,
    ExercicecoachComponent,
    SportComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
