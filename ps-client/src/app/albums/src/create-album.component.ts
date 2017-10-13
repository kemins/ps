import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as createAlbumStyles from './create-album.styl';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { AlbumService } from './album.service';

@Component({
  selector: 'ps-create-album',
  styles: [createAlbumStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-album.html'
})
export class CreateAlbumComponent implements OnInit {
  private albumForm;

  public constructor(private dialogRef: MdDialogRef<CreateAlbumComponent>,
                     private formBuilder: FormBuilder,
                     private albumService: AlbumService) {

  }

  public ngOnInit() {
    this.albumForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });

    this.albumForm.valueChanges
      .subscribe((album) => this.albumService.setNewAlbum(album))
  }

  public cancel() {
    this.dialogRef.close();
  }

  public create() {
    this.albumService.createAlbum()
  }
}
