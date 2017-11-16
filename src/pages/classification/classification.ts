import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsProvider } from '../../providers/tournaments';
import { PerformanceProvider } from '../../providers/performance';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ClassificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classification',
  templateUrl: 'classification.html', 
})
export class ClassificationPage {

  public tournamentId;
  public tournament: any;
  public performances=[];
  public stage: string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public tournamentProvider: TournamentsProvider,
              public performanceProvider: PerformanceProvider,
              private localNotifications: LocalNotifications) {

    this.tournament = {stages: []}
    this.tournamentId = navParams.get("tournamentId")    

  }

  ionViewDidLoad() {
    this.tournamentProvider.getTournamentById(this.tournamentId).subscribe((resp)=>{
      this.tournament = resp;
      this.stage=resp.stages[0].name;
    })

    this.performanceProvider.getPerformanceByTournament(this.tournamentId).subscribe((resp)=>{
      this.performances = resp;
      
      console.log(this.performances.length)
    })

  }

  selectStage(event,stage){
    this.stage = stage;
  }
  scheduleNotification(){
    console.log("teste"); 
    this.localNotifications.schedule({
      id: 1,
      text: 'Fique atento para não perder sua vez de jogar! :)',
      sound: 'file://sound.mp3',
      led:"FF0066",
      at: new Date(new Date().getTime() + 600000),
      data: { secret: "key" }
    });
  }
  
  stageButton(button, stage){
    
    if (button == stage) {
    
      return true;
    } else {
    
      return false;
    }
  }

}
