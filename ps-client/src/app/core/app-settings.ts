import * as _ from 'lodash';

export class AppSettings {
    private static settings = {
        endpoint: 'http://localhost:7000/',
        captcha: {
            key: '6LcTiwMTAAAAAOmlZPpue41lesvXZI-YSX7OxGFd'
        }
    };

    static getSetting = (key) => _.get(AppSettings.settings, key);
}