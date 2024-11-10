import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksDashboardComponent } from './books-dashboard/books-dashboard.component';
import { AddBooksOverviewComponent } from './add-books-overview/add-books-overview.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { RequestBookOverviewComponent } from './request-book-overview/request-book-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { BookInfoComponent } from './book-info/book-info.component';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BookConditionInfoComponent } from './book-condition-info/book-condition-info.component';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { InputOtpModule } from 'primeng/inputotp';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { BookImgUploadComponent } from './book-img-upload/book-img-upload.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DisplayImagesComponent } from './display-images/display-images.component';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'primeng/carousel';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../../shared/interceptors/LoadingInterceptor';


@NgModule({
  declarations: [
    AddBooksComponent,
    BooksDashboardComponent,
    AddBooksOverviewComponent,
    RequestBookOverviewComponent,
    BookInfoComponent,
    BookConditionInfoComponent,
    BookImgUploadComponent,
    SearchBookComponent,
    AvailableBooksComponent,
    DisplayImagesComponent    ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    StepperModule,
    FormsModule,
   InputTextModule,
   MultiSelectModule,
   InputTextareaModule, 
   FloatLabelModule,
   RatingModule,
   SliderModule,
   InputOtpModule,
   FileUploadModule,
   RadioButtonModule,
    ButtonModule,
     BadgeModule, 
     ToastModule,
     DataViewModule,
     TagModule,
     DialogModule,
     GalleriaModule,
     MatTableModule,
     CarouselModule
      ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  })
export class BooksModule { }
