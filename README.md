# NGX-Leaflet-Fullscreen

This is a wrapper for the [leaflet-fullscreen control](https://github.com/Leaflet/Leaflet.fullscreen) to make it easy to use in Angular 8+.

This wrapper is tested against the [@asymettrik/ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet) library but it has no dependency on that library so *should* work without it.

# Install

Install using npm:

```
npm install @runette/ngx-leaflet-fullscreen
```

# Usage

This library needs to be imported into the application module:

```
import {NgxLeafletFullscreenModule} from '@runette/ngx-leaflet-fullscreen'

imports: [
    ...
    NgxLeafletFullscreenModule,
  ],
```

Then, the control is inserted using the following directive:

```
<leaflet-fullscreen-control 
    [map]="..."
    [options]="..."
    ></leaflet-fullscreen-control>
```

Where `map` is an instance of a leaflet map and `options` is an object with valid options for the control.

# Usage with NGX-Leaflet

This library integrates very easily with ngx-leaflet using the onMapReady event.

```
<div id='map' class="map-container" leaflet
     [leafletOptions]="options"
     (leafletMapReady)="onMapReady($event)"
     ></div>
<leaflet-fullscreen-control 
    [map]="map"
    [options]="fullscreenOptions"
    ></leaflet-fullscreen-control>
```
