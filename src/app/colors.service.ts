import { Injectable } from '@angular/core';
import { Color } from './color';
import { COLORS } from './colorsArray';

@Injectable({
  providedIn: 'root'
})
export class COLORSService {
  getColors(): Color[] {
    return COLORS;
  }
  constructor(private COLORSService: COLORSService) { }
}