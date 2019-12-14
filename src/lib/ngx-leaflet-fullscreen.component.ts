import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Map, control, Control} from 'leaflet';
import * as L from 'leaflet';
import '../../../../node_modules/leaflet-fullscreen/dist/Leaflet.fullscreen.js';

declare module 'leaflet' {
  namespace control {
      function fullscreen(v: any): Control;
    }
}

@Component({
  selector: 'leaflet-fullscreen-control',
  template: '',
  styleUrls: []
})
export class FullscreenControlComponent implements OnInit, OnDestroy {
  private _map: Map;
  private control: Control;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.map.removeControl(this.control)
  }

  @Input() options: {[name:string]:any} = {};

  @Input() set map(map: Map){
    if (map) { 
      this._map = map;
      this.control = control.fullscreen(this.options)
      this.control.addTo(map);
      map.on('enterFullscreen', () => map.invalidateSize());
      map.on('exitFullscreen', () => map.invalidateSize());
    };
  };
  get map(): Map {
    return this._map
  };
};
