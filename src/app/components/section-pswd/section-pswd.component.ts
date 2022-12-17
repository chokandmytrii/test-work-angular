import { Component, Output, EventEmitter } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-section-pswd',
  templateUrl: './section-pswd.component.html',
  styleUrls: ['./section-pswd.component.css'],
})
export class SectionPswdComponent {
  changeStyle: EventEmitter<any> = new EventEmitter();

  password: any = '';
  newstyle!: string;
  msg!: string;
  eye = faEye;
  eyeCross = faEyeSlash;
  visible: boolean = false;
  type: string = 'password';

  checkPassword(value: any) {
    let letter = false;
    let numb = false;
    let digit = false;
    if (value === '') {
      this.newstyle = '';
      return '';
    } else {
      const arr = value.split('');
      const valueArr = arr.map((element: any) =>
        isNaN(+element) ? element : +element
      );

      const checkFunc = valueArr.some((element: any) => {
        if (typeof element !== 'number' && element.match(/^[a-zA-Z]+$/)) {
          letter = true;
        } else if (typeof element === 'number') {
          numb = true;
        } else {
          digit = true;
        }
      });

      if (letter && numb && digit) {
        this.msg = 'strong';
        this.newstyle = 'strong';
      } else if (
        (letter && numb && !digit) ||
        (numb && digit && !letter) ||
        (digit && letter && !numb)
      ) {
        this.msg = 'medium';
        this.newstyle = 'medium';
      } else if (letter || numb || digit) {
        this.msg = 'weak';
        this.newstyle = 'weak';
      }
      if (arr.length < 8) {
        this.newstyle = 'empty';
      }
      return valueArr;
    }
  }

  changeVisibility() {
    this.visible = !this.visible;
    if (this.visible) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
