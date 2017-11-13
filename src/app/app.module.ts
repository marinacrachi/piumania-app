import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClassificationPage } from '../pages/classification/classification';
import { TournamentsProvider } from '../providers/tournaments';
import { HttpModule } from '@angular/http';
import { ClassificationProvider } from '../providers/classification';
import { Api } from '../providers/api';
import { AuthProvider } from '../providers/auth/auth';
import { PerformanceProvider } from '../providers/performance';
import { PerformancePipe } from '../pipes/performance/performance';


@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ClassificationPage,
    PerformancePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    [HttpModule],
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ClassificationPage
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
  ]
})
export class AppModule {}
