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
        this._map.removeControl(this.control);
        this._map.off('enterFullscreen');
        this._map.off('exitFullscreen');
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
    /** @type {?} */
    FullscreenControlComponent.prototype.control;
    /** @type {?} */
    FullscreenControlComponent.prototype.options;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxlYWZsZXQtZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnVuZXR0ZS9uZ3gtbGVhZmxldC1mdWxsc2NyZWVuLyIsInNvdXJjZXMiOlsibGliL25neC1sZWFmbGV0LWZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBNkIsTUFBTSxTQUFTLENBQUM7QUFDakUsT0FBTyxpRkFBaUYsQ0FBQztBQU96RixNQUFNLE9BQU8sMEJBQTBCO0lBSXJDO1FBV1MsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFYekIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7O0lBSUQsSUFBYSxHQUFHLENBQUMsR0FBUTtRQUN2QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7OztZQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQztTQUN0RDtRQUFBLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQzs7OztJQUNGLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBQUEsQ0FBQzs7O1lBakNILFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsRUFBRTthQUViOzs7OztzQkFnQkUsS0FBSztrQkFFTCxLQUFLOzs7Ozs7O0lBaEJOLDBDQUFrQjs7SUFDbEIsNkNBQW1DOztJQWFuQyw2Q0FBeUM7Ozs7QUFjMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9J0BydW5ldHRlL2xlYWZsZXQtZnVsbHNjcmVlbicvPlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWFwLCBjb250cm9sLCBDb250cm9sLCBGdWxsc2NyZWVuT3B0aW9uc30gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcnVuZXR0ZS9sZWFmbGV0LWZ1bGxzY3JlZW4vZGlzdC9MZWFmbGV0LmZ1bGxzY3JlZW4uanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWFmbGV0LWZ1bGxzY3JlZW4tY29udHJvbCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbWFwOiBNYXA7XG4gIHB1YmxpYyBjb250cm9sOiBDb250cm9sLkZ1bGxzY3JlZW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX21hcC5yZW1vdmVDb250cm9sKHRoaXMuY29udHJvbCk7XG4gICAgdGhpcy5fbWFwLm9mZignZW50ZXJGdWxsc2NyZWVuJyk7XG4gICAgdGhpcy5fbWFwLm9mZignZXhpdEZ1bGxzY3JlZW4nKVxuICB9XG5cbiAgQElucHV0KCkgb3B0aW9uczogRnVsbHNjcmVlbk9wdGlvbnMgPSB7fTtcblxuICBASW5wdXQoKSBzZXQgbWFwKG1hcDogTWFwKXtcbiAgICBpZiAobWFwKSB7IFxuICAgICAgdGhpcy5fbWFwID0gbWFwO1xuICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbC5mdWxsc2NyZWVuKHRoaXMub3B0aW9ucylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRUbyhtYXApO1xuICAgICAgbWFwLm9uKCdlbnRlckZ1bGxzY3JlZW4nLCAoKSA9PiBtYXAuaW52YWxpZGF0ZVNpemUoKSk7XG4gICAgICBtYXAub24oJ2V4aXRGdWxsc2NyZWVuJywgKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCkpO1xuICAgIH07XG4gIH07XG4gIGdldCBtYXAoKTogTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwXG4gIH07XG59O1xuIl19