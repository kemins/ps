import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from 'rxjs/Observable';
import { EmailValidator } from '../../validators';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import * as profileStyles from './profile.styl';

import * as _ from 'lodash';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'ps-profile',
    styles: [profileStyles],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {
    profile: Observable<Profile>;
    dirtyProfile: Observable<Profile>;
    uploader: FileUploader = new FileUploader({url: URL});
    profileForm;

    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            displayName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.email])],
            picture: ['']
        });

        this.dirtyProfile
            .distinctUntilChanged((profile) => _.isEqual(profile, this.profileForm.value))
            .subscribe((profile) => this.profileForm.patchValue(profile));

        this.profileForm.valueChanges
            .subscribe((profile) => this.profileService.setDirtyProfile(profile));
    }

    constructor(private profileService: ProfileService, private formBuilder: FormBuilder) {
        this.profile = profileService.getProfile();
        this.dirtyProfile = profileService.getDirtyProfile();
    }

    onSubmit() {
        this.profileService.commitDirtyProfile();
        //this.profileService.save();
    }

    uploadPhoto() {

    }
}
