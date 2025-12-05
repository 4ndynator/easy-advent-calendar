import {Component, inject, output, signal} from '@angular/core';
import {ContentService} from '../content-service';
import {FormsModule} from '@angular/forms';
import {parseLinesToContent} from './util/parseLinesToContent';
import {shuffleArray} from './util/shuffleArray';

@Component({
  selector: 'app-import-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './import-dialog.html',
  styleUrl: './import-dialog.scss',
})
export class ImportDialog {
  inputText = signal("");
  hasError = false;
  isSubmitted = false;
  cancel = output<void>();
  contentService = inject(ContentService);

  onCancel() {
    this.cancel.emit();
  }

  onAddContent() {
    this.isSubmitted = true;
    if (this.inputText()) {
      const parsedContent = parseLinesToContent(this.inputText());
      if (parsedContent.length < 24) {
        this.hasError = true;
        return;
      }
      shuffleArray(parsedContent);
      this.contentService.setContent(parsedContent);
      this.hasError = false;
    }
  }
}
