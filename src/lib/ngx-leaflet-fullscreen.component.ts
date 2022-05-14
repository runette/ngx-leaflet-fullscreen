/// <reference types='@runette/leaflet-fullscreen'/>
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Map, control, Control, FullscreenOptions} from 'leaflet';
import '../../../../node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.min.js';

@Component({
  selector: 'leaflet-fullscreen-control',
  template: '',
  styleUrls: []
})
export class FullscreenControlComponent implements OnInit, OnDestroy {
  @Input() options: FullscreenOptions = {};

  private _map?: Map;
  public control: Control.Fullscreen = new Control.Fullscreen(this.options);

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._map?.removeControl(this.control);
    this._map?.off('enterFullscreen');
    this._map?.off('exitFullscreen')
  }

  @Input() set map(map: Map | undefined){
    if (map) { 
      this._map = map;
      this.control = control.fullscreen(this.options)
      this.control.addTo(map);
      map.on('enterFullscreen', () => map.invalidateSize());
      map.on('exitFullscreen', () => map.invalidateSize());
    };
  };
  get map(): Map | undefined {
    return this._map
  };
};
