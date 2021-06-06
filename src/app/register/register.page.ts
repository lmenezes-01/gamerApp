import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'Você pode optar em compartilhar suas interações ou não com o aplicativo, com a finalizade de melhorarmos nossas implementações.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
