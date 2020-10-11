import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cảnh báo!',
      message: 'Bạn muốn đăng xuất ngay bây giờ ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('đã hủy tác vụ đăng xuất !');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('đăng xuất thành công');
          }
        }
      ]
    });

    await alert.present();
  }

}
