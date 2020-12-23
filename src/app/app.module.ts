import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostFooterComponent } from './post/post-footer/post-footer.component';
import { PostBodyComponent } from './post/post-body/post-body.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { FooterButtonsComponent } from './post/post-footer/footer-buttons/footer-buttons.component';
import { FooterCommentsComponent } from './post/post-footer/footer-comments/footer-comments.component';
import { CommentComponent } from './post/post-footer/footer-comments/comment/comment.component';
import {FormsModule} from '@angular/forms';
import { UserNamePipe } from './post/user-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    PostComponent,
    PostFooterComponent,
    PostBodyComponent,
    PostHeaderComponent,
    FooterButtonsComponent,
    FooterCommentsComponent,
    CommentComponent,
    UserNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
