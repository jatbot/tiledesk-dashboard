import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';

// import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    LoadingSpinnerComponent,
  ],
  exports: [
    LoadingSpinnerComponent,
    TranslateModule,
  ],
})
export class SharedModule { }
