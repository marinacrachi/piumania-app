import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsProvider } from '../../providers/tournaments';
import { PerformanceProvider } from '../../providers/performance';

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
              public performanceProvider: PerformanceProvider) {

    this.tournament = {stages: []}
    this.tournamentId = navParams.get("tournamentId")    

  }

  ionViewDidLoad() {
    this.tournamentProvider.getTournamentById(this.tournamentId).subscribe((resp)=>{
      this.tournament = resp;
    })

    this.performanceProvider.getPerformanceByTournament(this.tournamentId).subscribe((resp)=>{
      this.performances = resp;
      console.log(this.performances.length)
    })

  }

  selectStage(event,stage){
    this.stage = stage;
  }

  stageButton(button, stage){
    console.log("stage button: " + button)
    console.log("stage: " + stage)
    if (button == stage) {
      console.log(true)
      return true;
    } else {
      console.log(false)
      return false;
    }
  }

}
