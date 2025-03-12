import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'else-template-angular';
  showMensagem = true;

  onClickButton() {
    this.showMensagem = !this.showMensagem;
  }
}
