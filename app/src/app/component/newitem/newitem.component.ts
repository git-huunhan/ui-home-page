import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.scss'],
})
export class NewitemComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Import new item succsess',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {}

}
