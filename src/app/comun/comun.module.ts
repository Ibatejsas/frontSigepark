import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SideBarComponent,
    TopBarComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [HomeComponent, FooterComponent, SideBarComponent, TopBarComponent, ReactiveFormsModule],
})
export class ComunModule {}
