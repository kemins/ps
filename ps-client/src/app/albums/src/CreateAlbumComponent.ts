import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as createAlbumStyles from './create-album.styl';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { AlbumService } from './AlbumService';

@Component({
  selector: 'ps-create-album',
  styles: [createAlbumStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-album.html'
})
export class CreateAlbumComponent implements OnInit {
  private albumForm;

  public constructor(private dialogRef: MatDialogRef<CreateAlbumComponent>,
                     private formBuilder: FormBuilder,
                     private albumService: AlbumService) {

  }

  public ngOnInit(): void {
    this.albumForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });

    this.albumForm.valueChanges
      .subscribe((album) => this.albumService.setNewAlbum(album))
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public create(): void {
    this.albumService.createAlbum()
  }
}
