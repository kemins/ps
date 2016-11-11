export class AppActions {
    // contact message
    public static SEND_MESSAGE: string = 'SEND_MESSAGE';
    public static SET_CONTACT_TOKEN: string = 'SET_CONTACT_TOKEN';
    public static SET_CONTACT: string = 'SET_CONTACT';
    public static COMMIT_DIRTY_CONTACT: string = 'COMMIT_DIRTY_CONTACT';
    public static SET_DIRTY_CONTACT: string = 'SET_DIRTY_CONTACT';
    public static MESSAGE_POST_SUCCESS: string = 'MESSAGE_POST_SUCCESS';
    public static MESSAGE_POST_FAIL: string = 'MESSAGE_POST_FAIL';

    // notifications
    public static ADD_NOTIFICATION: string = 'ADD_NOTIFICATION';
    public static READ_NOTIFICATIONS: string = 'READ_NOTIFICATIONS';

    // slides
    public static FETCH_SLIDES: string = 'FETCH_SLIDES';
    public static SLIDE_FETCH_SUCCESS: string = 'SLIDE_FETCH_SUCCESS';
    public static SLIDE_FETCH_FAIL: string = 'SLIDE_FETCH_FAIL';

    // social login
    public static SIGN_IN_WITH_TOKE: string = 'SIGN_IN_WITH_TOKE';
    public static SIGN_UP_WITH_TOKE: string = 'SIGN_UP_WITH_TOKE';
    public static USER_AUTH_SUCCESS: string = 'USER_AUTH_POST_SUCCESS';
    public static USER_AUTH_FAIL: string = 'USER_AUTH_POST_FAIL';

    // social login
    public static SL_SET_MODE: string = 'SL_SET_MODE';

    // hmr
    public static HMR_RESTORE: string = 'HMR_RESTORE';
    public static HMR_INIT_STATE: string = 'HMR_INIT_STATE';
}