/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-leaflet-fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types='@runette/leaflet-fullscreen'/>
import { Component, Input } from '@angular/core';
import { Map, control } from 'leaflet';
import '../../../../node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js';
export class FullscreenControlComponent {
    constructor() {
        this.options = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.removeControl(this.control);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    set map(map) {
        if (map) {
            this._map = map;
            this.control = control.fullscreen(this.options);
            this.control.addTo(map);
            map.on('enterFullscreen', (/**
             * @return {?}
             */
            () => map.invalidateSize()));
            map.on('exitFullscreen', (/**
             * @return {?}
             */
            () => map.invalidateSize()));
        }
        ;
    }
    ;
    /**
     * @return {?}
     */
    get map() {
        return this._map;
    }
    ;
}
FullscreenControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'leaflet-fullscreen-control',
                template: ''
            }] }
];
/** @nocollapse */
FullscreenControlComponent.ctorParameters = () => [];
FullscreenControlComponent.propDecorators = {
    options: [{ type: Input }],
    map: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullscreenControlComponent.prototype._map;
    /**
     * @type {?}
     * @private
     */
    FullscreenControlComponent.prototype.control;
    /** @type {?} */
    FullscreenControlComponent.prototype.options;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxlYWZsZXQtZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnVuZXR0ZS9uZ3gtbGVhZmxldC1mdWxsc2NyZWVuLyIsInNvdXJjZXMiOlsibGliL25neC1sZWFmbGV0LWZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBNkIsTUFBTSxTQUFTLENBQUM7QUFDakUsT0FBTyxpRkFBaUYsQ0FBQztBQU96RixNQUFNLE9BQU8sMEJBQTBCO0lBSXJDO1FBU1MsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFUekIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEMsQ0FBQzs7Ozs7SUFJRCxJQUFhLEdBQUcsQ0FBQyxHQUFRO1FBQ3ZCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsRUFBRSxDQUFDLGlCQUFpQjs7O1lBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQUM7WUFDdEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7OztZQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDO1NBQ3REO1FBQUEsQ0FBQztJQUNKLENBQUM7SUFBQSxDQUFDOzs7O0lBQ0YsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFBQSxDQUFDOzs7WUEvQkgsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSxFQUFFO2FBRWI7Ozs7O3NCQWNFLEtBQUs7a0JBRUwsS0FBSzs7Ozs7OztJQWROLDBDQUFrQjs7Ozs7SUFDbEIsNkNBQXlCOztJQVd6Qiw2Q0FBeUM7Ozs7QUFjMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9J0BydW5ldHRlL2xlYWZsZXQtZnVsbHNjcmVlbicvPlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFwLCBjb250cm9sLCBDb250cm9sLCBGdWxsc2NyZWVuT3B0aW9uc30gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcnVuZXR0ZS9sZWFmbGV0LWZ1bGxzY3JlZW4vZGlzdC9MZWFmbGV0LmZ1bGxzY3JlZW4uanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbWFwOiBNYXA7XG4gIHByaXZhdGUgY29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAucmVtb3ZlQ29udHJvbCh0aGlzLmNvbnRyb2wpXG4gIH1cblxuICBASW5wdXQoKSBvcHRpb25zOiBGdWxsc2NyZWVuT3B0aW9ucyA9IHt9O1xuXG4gIEBJbnB1dCgpIHNldCBtYXAobWFwOiBNYXApe1xuICAgIGlmIChtYXApIHsgXG4gICAgICB0aGlzLl9tYXAgPSBtYXA7XG4gICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmZ1bGxzY3JlZW4odGhpcy5vcHRpb25zKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFRvKG1hcCk7XG4gICAgICBtYXAub24oJ2VudGVyRnVsbHNjcmVlbicsICgpID0+IG1hcC5pbnZhbGlkYXRlU2l6ZSgpKTtcbiAgICAgIG1hcC5vbignZXhpdEZ1bGxzY3JlZW4nLCAoKSA9PiBtYXAuaW52YWxpZGF0ZVNpemUoKSk7XG4gICAgfTtcbiAgfTtcbiAgZ2V0IG1hcCgpOiBNYXAge1xuICAgIHJldHVybiB0aGlzLl9tYXBcbiAgfTtcbn07XG4iXX0=