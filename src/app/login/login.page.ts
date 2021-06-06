import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'Encaminhamos um e-mail para sua conta pessoal, para redefinição de senha',
      buttons: ['OK']
    });

    await alert.present();
  }
}
