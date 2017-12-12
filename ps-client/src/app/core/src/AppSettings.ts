import { get } from 'lodash';

export class AppSettings {
  private static settings = {
    endpoint: 'http://localhost:8000/',
    captcha: {
      key: '6LcTiwMTAAAAAOmlZPpue41lesvXZI-YSX7OxGFd'
    }
  };

  public static getSetting(key: string): string {
    return get(AppSettings.settings, key, '');
  }
}
