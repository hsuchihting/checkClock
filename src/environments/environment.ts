// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  companyUrl: 'http://124.219.22.105/Function/GetCompanyList/',
  loginUrl: 'http://124.219.22.105/User/Login/',
  logoutUrl: 'http://124.219.22.105/User/Logout',
  loginPageUrl: 'http://localhost:4200/login',
  addClockUrl: 'http://124.219.22.105/Clock/AddClock',
  getClockDataUrl: 'http://124.219.22.105/Clock/GetClockDayData',
  getServerTimeUrl: 'http://124.219.22.105/Function/GetServerTime',
  getReasonListUrl: 'http://124.219.22.105/Function/GetReasonList',
  GetUserDataUrl: 'http://124.219.22.105/SystemSetting/GetUserDataList',
  UpdateUserData: 'http://124.219.22.105/SystemSetting/UpdateUserData',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
