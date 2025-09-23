import { Component } from '@angular/core';
import { NotificationService } from '../services/notification';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
constructor(private notification: NotificationService) {}

  permitirNotificaciones() {
    this.notification.requestPermission();
  }

  probarNotificacion() {
    this.notification.showNotification(
      'Notificación de prueba',
      '¡Hola! Esta es una notificación local desde Angular 🚀'
    );
  }
}