import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './Components/accordion/accordion.component';
import { AlertComponent } from './Components/alert/alert.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { CollapseComponent } from './Components/collapse/collapse.component';
import { DatepickerComponent } from './Components/datepicker/datepicker.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { PopoverComponent } from './Components/popover/popover.component';
import { ProgressbarComponent } from './Components/progressbar/progressbar.component';
import { RatingComponent } from './Components/rating/rating.component';
import { TableComponent } from './Components/table/table.component';
import { TimepickerComponent } from './Components/timepicker/timepicker.component';
import { ToastComponent } from './Components/toast/toast.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { TypeaheadComponent } from './Components/typeahead/typeahead.component';

const routes: Routes = [
  { path: '', redirectTo: '/accordian', pathMatch: 'full' },

  {
    path: 'accordian',
    component: AccordionComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'collapse',
    component: CollapseComponent,
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'popover',
    component: PopoverComponent,
  },
  {
    path: 'progressbar',
    component: ProgressbarComponent,
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'timepicker',
    component: TimepickerComponent,
  },
  {
    path: 'toast',
    component: ToastComponent,
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
