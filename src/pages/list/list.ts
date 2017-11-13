import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassificationPage } from '../classification/classification';
import { TournamentsProvider } from '../../providers/tournaments';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any; 
  tournaments: Array<{ nome: string, categoria: string, data: Date }>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tournamentProvider: TournamentsProvider
  ) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() { 

    this.tournamentProvider.getAll().subscribe((resp) => {
      this.tournaments = resp;

    });

    // this.tournamentProvider.getTournament('Feminino').subscribe((resp) => {
    //   this.tournaments = resp; 

    // }); 
  }

  navigateToTournament(event, id) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ClassificationPage, {
      tournamentId: id
    });
  }
} 
