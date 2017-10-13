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

    // profile
    public static SET_DIRTY_PROFILE: string = 'SET_DIRTY_PROFILE';
    public static SET_PROFILE: string = 'SET_PROFILE';
    public static LOGOUT: string = 'LOGOUT';
    public static LOGOUT_SUCCESS: string = 'LOGOUT_POST_SUCCESS';
    public static LOGOUT_FAIL: string = 'LOGOUT_FAIL_SUCCESS';
    public static SAVE_PROFILE: string = 'SAVE_PROFILE';
    public static PROFILE_POST_SUCCESS: string = 'PROFILE_POST_SUCCESS';
    public static PROFILE_POST_FAIL: string = 'PROFILE_POST_FAIL';
    public static SET_AVATAR: string = 'SET_AVATAR';
    public static SET_DIRTY_AVATAR: string = 'SET_DIRTY_AVATAR';
    public static RESET_AVATAR: string = 'RESET_AVATAR';
    public static UPLOAD_AVATAR: string = 'UPLOAD_AVATAR';
    public static AVATAR_POST_SUCCESS: string = 'AVATAR_POST_SUCCESS';
    public static AVATAR_POST_FAIL: string = 'AVATAR_POST_FAIL';


    // footer
    public static SET_FOOTER_ACTIONS: string = 'SET_FOOTER_ACTIONS';

    // side bar
    public static SET_SIDE_BAR_ACTIONS: string = 'SET_SIDE_BAR_ACTIONS';
    public static SET_CURRENT_ACTION: string = 'SET_CURRENT_ACTION';
    public static SET_CURRENT_ACTION_BY_NAME: string = 'SET_CURRENT_ACTION_BY_NAME';

    // hmr
    public static HMR_RESTORE: string = 'HMR_RESTORE';
    public static HMR_INIT_STATE: string = 'HMR_INIT_STATE';

    // navigate to
    public static NAVIGATE_TO: string = 'NAVIGATE_TO';
    public static POST_NAVIGATE_TO: string = 'POST_NAVIGATE_TO';

    // albums
    public static SET_NEW_ALBUM: string = 'SET_NEW_ALBUM';
    public static CREATE_NEW_ALBUM: string = 'CREATE_NEW_ALBUM';
    public static ALBUM_POST_SUCCESS: string = 'ALBUM_POST_SUCCESS';
    public static ALBUM_POST_FAIL: string = 'ALBUM_POST_FAIL';


}