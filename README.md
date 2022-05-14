# NGX-Leaflet-Fullscreen

This is a wrapper for the [leaflet-fullscreen control](https://github.com/Leaflet/Leaflet.fullscreen) to make it easy to use in Angular 8+.

This wrapper is tested against the [@asymmetrik/ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet) library but it has no dependency on that library so *should* work without it. It does, obviously, have a dependency that leaflet is loaded.

For more detailed descriptions of how this wrapper was created : [Documentation](https://runette.gitbook.io/alcm/).

For detailed descriptions of how to use and worked examples : [Article](https://medium.com/runic-software/quick-guide-to-leaflet-controls-in-angular-io-1b35d0807bdb), [Article](https://medium.com/runic-software/advanced-interactive-maps-in-angular-with-leaflet-68baafa03f72)

For an example of this working in a real site - see [trackbash](https://trackbash.co.uk).

# Install

Install using npm:

```
npm install @runette/ngx-leaflet-fullscreen
```
>
>NOTE - after version 1.0.6 - this library is built using ng-packagr and an Ivy partial comppile. This should allow compatability with any version of Angular.io after >v12.0.0 (according to the Angular docs).
>

>
> Note : this package currently installs a _fork_ of leaflet-fullscreen : [@runette/leaflet-fullscreen](https://github.com/runette/Leaflet.fullscreen).
>
>This is because the root repo has not been updated with several important PRs and has not been changed for 4 years.
# Usage

This library needs to be imported into the application module:

```ts
/// <reference types='@runette/leaflet-fullscreen' />
import {NgxLeafletFullscreenModule} from '@runette/ngx-leaflet-fullscreen'

imports: [
    ...
    NgxLeafletFullscreenModule,
  ],
```

Then, the control is inserted using the following directive:

```html
<leaflet-fullscreen-control
    [map]="..."
    [options]="..."
    ></leaflet-fullscreen-control>
```

Where `map` is an instance of a leaflet map and `options` is an object with valid options for the control.

Sometimes, Angular cannot find the correct typings. In this case, add the following directive as the first line of the .ts script:

```
/// <reference types='@runette/leaflet-fullscreen' />
```

# Usage with NGX-Leaflet

This library integrates very easily with ngx-leaflet using the onMapReady event:

```html
<div id='map' class="map-container" leaflet
     [leafletOptions]="options"
     (leafletMapReady)="onMapReady($event)"
     ></div>
<leaflet-fullscreen-control
    [map]="map"
    [options]="fullscreenOptions"
    ></leaflet-fullscreen-control>
```
by adding the following to your map component:

```ts
...
import { Map } from 'leaflet';


export class OsmMapComponent implements OnInit, OnDestroy {
  public map?: Map;
  public fullscreenOptions: FullscreenOptions = {
    position: 'topleft'
  };

  ...

  onMapReady(map: Map) {
    this.map = map;
  }
```

# Usage - CSS

Unfortunately - I think because the leaflet map is run outside of Angular by ngx-leaflet - the normal css encapsulation does not work and you have to load the css globally.

Add the following to the styles.css

```CSS
@import "@runette/leaflet-fullscreen/dist/leaflet.fullscreen.css";
```

# Build Config

For some reason yet to be found - this library does not like being built with `"buildOptimizer": true,` in the build environment - which is usually the default for the production environment in `angular.json`.

Always build with `"buildOptimizer": false,`.


# API Access to the Control

If you want access the control's methods directly from your typescript code - this can be done with `@ViewChild`

Use `ViewChild` to access the component, for instance 

```ts
@ViewChild(FullscreenControlComponent,{static: false}) fullscreenComponent: FullscreenControlComponent;
```

The actual instance of the control can then be accessed directly as `this.fullscreenComponent.control`


For more details and worked examples, see : [Article](https://medium.com/runic-software/advanced-interactive-maps-in-angular-with-leaflet-68baafa03f72)

# Contributions

Contributions to this repository are very welcome.

Please fork the repository and create a new branch for your changes. The branch can be built locally using 

```
ng build ngx-leaflet-fullscreen
```

in the root folder of the repo. This creates an npm package in a folder called `dist`. This can loaded in a test app using `npm install` and the FQ path to the dist folder.

When your changes are complete create a Pull Request against the master. It is IMPORTANT that you change the version number in `package.json` AND the tag number in `.github/workflows/build.yaml` to the next version before the PR.

When I have accepted and merged the PR, Github actions will automatically build the new package release and loaded it both as a GH release using the version as the tag name and publish the new version on npm.


