import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RedditService } from 'src/app/shared/services/reddit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formGroup!: FormControl;
  private readonly redditService = inject(RedditService);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = new FormControl('gifs');

    this.onChange();
  }

  onChange() {
    this.redditService.getGifs(this.formGroup).subscribe(a => console.log(a));
  }
}
