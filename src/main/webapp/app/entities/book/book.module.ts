import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginpagesampleSharedModule } from 'app/shared/shared.module';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookUpdateComponent } from './book-update.component';
import { BookDeletePopupComponent, BookDeleteDialogComponent } from './book-delete-dialog.component';
import { bookRoute, bookPopupRoute } from './book.route';

const ENTITY_STATES = [...bookRoute, ...bookPopupRoute];

@NgModule({
  imports: [LoginpagesampleSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [BookComponent, BookDetailComponent, BookUpdateComponent, BookDeleteDialogComponent, BookDeletePopupComponent],
  entryComponents: [BookDeleteDialogComponent]
})
export class LoginpagesampleBookModule {}
