import { OnInit, OnDestroy } from '@angular/core';
import { Map, FullscreenOptions } from 'leaflet';
import '../../../../node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js';
export declare class FullscreenControlComponent implements OnInit, OnDestroy {
    private _map;
    private control;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    options: FullscreenOptions;
    map: Map;
}
