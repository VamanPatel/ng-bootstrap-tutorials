import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './Components/accordion/accordion.component';
import { AlertComponent } from './Components/alert/alert.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { CollapseComponent } from './Components/collapse/collapse.component';
import { DatepickerComponent } from './Components/datepicker/datepicker.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { NavComponent } from './Components/nav/nav.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { PopoverComponent } from './Components/popover/popover.component';
import { ProgressbarComponent } from './Components/progressbar/progressbar.component';
import { RatingComponent } from './Components/rating/rating.component';
import { TableComponent } from './Components/table/table.component';
import { TimepickerComponent } from './Components/timepicker/timepicker.component';
import { ToastComponent } from './Components/toast/toast.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { TypeaheadComponent } from './Components/typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    NavComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TableComponent,
    TimepickerComponent,
    ToastComponent,
    TooltipComponent,
    TypeaheadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
