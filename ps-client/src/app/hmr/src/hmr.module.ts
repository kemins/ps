import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { ApplicationRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '../../app.actions';

export class HMRModule {
    constructor(private appRef: ApplicationRef, private appStore: Store) {}

    hmrOnInit(store) {
        if (store && store.state) {
            this.appStore.dispatch({
                type: AppActions.HMR_RESTORE,
                payload: store.state
            });

            if ('restoreInputValues' in store) {
                store.restoreInputValues();
            }
            // change detection
            this.appRef.tick();
            delete store.state;
            delete store.restoreInputValues;
        }
    }

    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        // store.state = Object.assign({}, appState)
        // save input values
        ///store.restoreInputValues  = createInputTransfer();
        // remove styles
        removeNgStyles();

        this.appStore
            .first()
            .subscribe( snapshot => store.state = snapshot);
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
        // anything you need done the component is removed
    }
}