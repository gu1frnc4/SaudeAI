import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './views/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent, 
    DetailsComponent, 
    SearchComponent, 
    HomeComponent 
  ],
  providers: []
})
export class AppModule { }