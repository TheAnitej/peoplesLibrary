import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksDashboardComponent } from './books-dashboard/books-dashboard.component';
import { ChatBoxComponent } from '../messages/chat-box/chat-box.component';
import { SearchBookComponent } from './search-book/search-book.component';

const routes: Routes = [
  { path: '', component: BooksDashboardComponent },
  { path: 'addBook', component: AddBooksComponent },
  { path: 'searchBook', component: SearchBookComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }