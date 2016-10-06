import * as _ from 'lodash';

export class AppSettings {
    private static settings = {
        captcha: {
            key: '6LcTiwMTAAAAAOmlZPpue41lesvXZI-YSX7OxGFd'
        }
    };

    static getSetting = (key) => _.get(AppSettings.settings, key);
}