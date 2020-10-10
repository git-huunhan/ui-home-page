import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bill-user',
  templateUrl: './bill-user.page.html',
  styleUrls: ['./bill-user.page.scss'],
})
export class BillUserPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cảnh báo!',
      message: 'Bạn có chắc rằng mình muốn hủy đơn hàng này ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('không hủy đơn hàng nữa do lúc nãy còn bồng bột chưa biết suy nghĩ khi mua hàng !!');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('con chó này. đm m dám hủy đơn của bố :<');
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
