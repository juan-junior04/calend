import { Injectable } from '@angular/core';
import { AnyComponent } from '@fullcalendar/core/preact';
import Push, { PushNotification, PushNotificationParams } from 'push.js';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showNotification(title: string,action:any,nombre_empresa:any,fechaFinal:any): void {
    Push.create(title, {
      body: `${action} ${nombre_empresa} Para el ${fechaFinal}`,
      icon: 'assets/WhatsApp_Image_2023-10-10_at_10.56.40_AM-transformed.png',

    });
  }
}
