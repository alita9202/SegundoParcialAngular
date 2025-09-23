import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  requestPermission(): void {
    if ('Notification' in window) {
      (window as any).Notification.requestPermission().then((permission: string) => {
        console.log('Permiso de notificación:', permission);
      });
    } else {
      console.warn('Este navegador no soporta notificaciones.');
    }
  }

  showNotification(title: string, body: string): void {
    if ('Notification' in window && (window as any).Notification.permission === 'granted') {
      new (window as any).Notification(title, { body });
    }
  }
}





