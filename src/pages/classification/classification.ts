import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Socket } from 'ng-socket-io';

import { NavController, NavParams } from 'ionic-angular';
import { TournamentsProvider } from '../../providers/tournaments';
import { PerformanceProvider } from '../../providers/performance';
/**
 * Generated class for the ClassificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-classification',
  templateUrl: 'classification.html',
})
export class ClassificationPage {

  public tournamentId;
  public tournament: any;
  public performances = [];
  public stage: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tournamentProvider: TournamentsProvider,
    public performanceProvider: PerformanceProvider,
    private localNotifications: LocalNotifications,
    private socket: Socket) {

    this.tournament = { stages: [] }
    this.tournamentId = navParams.get("tournamentId")


  }

  ionViewDidLoad() {
    this.tournamentProvider.getTournamentById(this.tournamentId).subscribe((resp) => {
      this.tournament = resp;
      this.stage = resp.stages[0].name;
    })

    this.performanceProvider.getPerformanceByTournament(this.tournamentId).subscribe((resp) => {
      this.performances = resp;

      console.log(this.performances.length)
    })

    //Usando o socket.io CLIENT
    this.socket.fromEvent("score-update")
    .map((data: any) => data)
    .subscribe(data => {
      this.updatePerformaceById(data)
    });//ouvindo eventos
    
  }

  updatePerformaceById(data){
    this.performances.forEach((item,index)=>{
      console.log(item.id == data.id,data)
      
      if(item.id == data.id){
        this.performances[index].score = data.score
      }
    })
  }

  selectStage(event, stage) {
    this.stage = stage;
  }
  scheduleNotification() {
    console.log("teste");
    this.localNotifications.schedule({
      id: 1,
      text: 'Fique atento para não perder sua vez de jogar! :)',
      sound: 'file://sound.mp3',
      led: "FF0066",
      at: new Date(new Date().getTime() + 600000),
      data: { secret: "key" }
    });
  }

  stageButton(button, stage) {

    if (button == stage) {

      return true;
    } else {

      return false;
    }
  }

}
