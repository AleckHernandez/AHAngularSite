import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false;

  constructor() { }

  isDarkModePreferred(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
