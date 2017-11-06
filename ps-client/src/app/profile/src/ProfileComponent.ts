import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmailValidator } from '../../validators';
import { IProfile } from './IProfile';
import { ProfileService } from './ProfileService';
import * as profileStyles from './profile.styl';
import * as _ from 'lodash';
import { FileUploaderService } from '../../core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ps-profile',
  styles: [profileStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  private profile: Observable<IProfile>;
  private dirtyProfile: Observable<IProfile>;
  private avatar: Observable<any>;
  private dirtyAvatar: Observable<any>;
  private profileForm;
  private avatarSubscription: Subscription;

  @ViewChild('file')
  private file;

  @ViewChild('avatarForm')
  private avatarForm;

  public ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, EmailValidator.email])],
      gender: ['', Validators.required]
    });

    this.dirtyProfile
      .distinctUntilChanged((profile) => _.isEqual(profile, this.profileForm.value))
      .subscribe((profile) => this.profileForm.patchValue(profile));

    this.profileForm.valueChanges
      .subscribe((profile) => this.profileService.setDirtyProfile(profile));
  }

  public ngAfterViewInit(): void {
    this.avatarSubscription = this.fileUploader.uploadFiles(this.file.nativeElement)
      .subscribe((image) => this.profileService.setDirtyAvatar({
        s: image.data,
        m: image.data,
        l: image.data
      }));
  }

  public constructor(private profileService: ProfileService,
                     private formBuilder: FormBuilder,
                     private fileUploader: FileUploaderService) {
    this.profile = profileService.getProfile();
    this.dirtyProfile = profileService.getDirtyProfile();
    this.dirtyAvatar = profileService.getDirtyAvatar();
    this.avatar = profileService.getAvatar();
  }

  public onSubmit(): void {
    this.profileService.save();
  }

  public ngOnDestroy(): void {
    this.avatarSubscription.unsubscribe();
    this.avatarSubscription = null;
  }

  public resetAvatar(): void {
    this.avatarForm.nativeElement.reset();
    this.profileService.resetAvatar();
  }

  public uploadAvatar(): void {
    this.profileService.uploadAvatar();
  }

  public get isDirtyAvatar(): Observable<boolean> {
    return this.avatar
      .withLatestFrom(this.dirtyAvatar)
      .map(([avatar, dirtyAvatar]) => avatar.m !== dirtyAvatar.m);
  }
}
