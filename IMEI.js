// Install UUID
// $ ionic cordova plugin add cordova-plugin-uid
// $ npm install --save @ionic-native/uid@4

import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';
divece_id:any;
constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }

async getImei() {
 const { hasPermission } = await this.androidPermissions.checkPermission(
   this.androidPermissions.PERMISSION.READ_PHONE_STATE
 );

 if (!hasPermission) {
   const result = await this.androidPermissions.requestPermission(
     this.androidPermissions.PERMISSION.READ_PHONE_STATE
   );

   if (!result.hasPermission) {
     throw new Error('Permissions required');
   }

   // ok, a user gave us permission, we can get him identifiers after restart app
   return;
 }
 this.divece_id=this.uid.IMEI;
  return this.uid.IMEI
}


// Install Android Permissions
// $ ionic cordova plugin add cordova-plugin-android-permissions
// $ npm install --save @ionic-native/android-permissions@4

import { AndroidPermissions } from '@ionic-native/android-permissions';


constructor(private androidPermissions: AndroidPermissions) { }

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?',result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);