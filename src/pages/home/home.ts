import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
subject='';
body='';
to='';
  constructor(private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  Send(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
      
      }
     });
     
     let email = {
       to:this.to,
       cc: [],
       bcc: [],
       attachments: [],
       subject: this.subject,
       body: this.body,
       isHtml: true,
    
       
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
