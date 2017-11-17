import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule ,} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { ClassificationPage } from '../pages/classification/classification';
import { TournamentsProvider } from '../providers/tournaments';
import { ClassificationProvider } from '../providers/classification';
import { Api } from '../providers/api';
import { AuthProvider } from '../providers/auth/auth';
import { PerformanceProvider } from '../providers/performance';
import { PerformancePipe } from '../pipes/performance/performance';
import { URL_API } from "../providers/api";

const config: SocketIoConfig = { url: URL_API, options: {} };//cofig for socket https://www.npmjs.com/package/ng-socket-io#import-and-configure-socketiomodule

@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ClassificationPage,
    PerformancePipe,
    LoginPage
  ],
  imports: [
    BrowserModule,
    [HttpModule],
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ClassificationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TournamentsProvider,
    ClassificationProvider,
    Api,
    AuthProvider,
    PerformanceProvider,
    LocalNotifications
  ]
})
export class AppModule {}
