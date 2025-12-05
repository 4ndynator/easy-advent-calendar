import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encoder',
  imports: [FormsModule],
  templateUrl: './encoder.html',
  styleUrl: './encoder.scss',
})
export class Encoder {
  inputText = signal('');
  encodedOutput = signal('');
  errorMessage = signal('');

  onSubmit() {
    if (this.encodedOutput()) {
      this.encodedOutput.set('');
      return;
    }
    const lines = this.inputText().split('\n').filter(line => line.trim() !== '');

    if (lines.length < 24) {
      this.errorMessage.set(`Du musst 24 Zeilen eingeben, hast aber nur ${lines.length} eingegeben`);
      this.encodedOutput.set('');
      return;
    }

    this.errorMessage.set('');
    const encoded = btoa(this.inputText());
    this.encodedOutput.set(encoded);
  }
}
