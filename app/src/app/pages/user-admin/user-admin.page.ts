import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.page.html',
  styleUrls: ['./user-admin.page.scss'],
})
export class UserAdminPage implements OnInit {

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

  ngOnInit() {
  }

}
