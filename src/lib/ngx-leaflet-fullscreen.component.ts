/// <reference types='@runette/leaflet-fullscreen'/>
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Map, Control, FullscreenOptions} from 'leaflet';
import '../../../../node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.min.js';

@Component({
  selector: 'leaflet-fullscreen-control',
  template: '',
  styleUrls: []
})
export class FullscreenControlComponent implements OnInit, OnDestroy {
  private _options: FullscreenOptions = {};

  @Input() set options(opt: FullscreenOptions) {
    this._options = opt;
    this.control = new Control.Fullscreen(this._options)
    if (this._map) {
        this._map?.addControl(this.control);
        this._map?.on('enterFullscreen', () => this._map?.invalidateSize());
        this._map?.on('exitFullscreen', () => this._map?.invalidateSize());
    }
  }

  private _map?: Map;
  public control?: Control.Fullscreen;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.control) {
      this._map?.removeControl(this.control);
      this._map?.off('enterFullscreen');
      this._map?.off('exitFullscreen')
    }
  }

  @Input() set map(map: Map | undefined){
    if (map) { 
      this._map = map;
      if (this.control)
      {
        map.addControl(this.control)
        map.on('enterFullscreen', () => map.invalidateSize());
        map.on('exitFullscreen', () => map.invalidateSize());
      }
    };
  };
  get map(): Map | undefined {
    return this._map
  };
};
