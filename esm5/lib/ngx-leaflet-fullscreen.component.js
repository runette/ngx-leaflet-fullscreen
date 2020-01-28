/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-leaflet-fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types='@runette/leaflet-fullscreen'/>
import { Component, Input } from '@angular/core';
import { Map, control } from 'leaflet';
import '../../../../node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js';
var FullscreenControlComponent = /** @class */ (function () {
    function FullscreenControlComponent() {
        this.options = {};
    }
    /**
     * @return {?}
     */
    FullscreenControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FullscreenControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._map.removeControl(this.control);
        this._map.off('enterFullscreen');
        this._map.off('exitFullscreen');
    };
    Object.defineProperty(FullscreenControlComponent.prototype, "map", {
        get: /**
         * @return {?}
         */
        function () {
            return this._map;
        },
        set: /**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            if (map) {
                this._map = map;
                this.control = control.fullscreen(this.options);
                this.control.addTo(map);
                map.on('enterFullscreen', (/**
                 * @return {?}
                 */
                function () { return map.invalidateSize(); }));
                map.on('exitFullscreen', (/**
                 * @return {?}
                 */
                function () { return map.invalidateSize(); }));
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    FullscreenControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'leaflet-fullscreen-control',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    FullscreenControlComponent.ctorParameters = function () { return []; };
    FullscreenControlComponent.propDecorators = {
        options: [{ type: Input }],
        map: [{ type: Input }]
    };
    return FullscreenControlComponent;
}());
export { FullscreenControlComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxlYWZsZXQtZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnVuZXR0ZS9uZ3gtbGVhZmxldC1mdWxsc2NyZWVuLyIsInNvdXJjZXMiOlsibGliL25neC1sZWFmbGV0LWZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBNkIsTUFBTSxTQUFTLENBQUM7QUFDakUsT0FBTyxpRkFBaUYsQ0FBQztBQUV6RjtJQVNFO1FBV1MsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFYekIsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBSUQsc0JBQWEsMkNBQUc7Ozs7UUFTaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEIsQ0FBQzs7Ozs7UUFYRCxVQUFpQixHQUFRO1lBQ3ZCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7OztnQkFBRSxjQUFNLE9BQUEsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQUM7Z0JBQ3RELEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7Z0JBQUUsY0FBTSxPQUFBLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO2FBQ3REO1lBQUEsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUdELENBQUM7O2dCQWpDSCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLEVBQUU7aUJBRWI7Ozs7OzBCQWdCRSxLQUFLO3NCQUVMLEtBQUs7O0lBWVIsaUNBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTdCWSwwQkFBMEI7Ozs7OztJQUNyQywwQ0FBa0I7O0lBQ2xCLDZDQUFtQzs7SUFhbkMsNkNBQXlDOzs7O0FBYzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPSdAcnVuZXR0ZS9sZWFmbGV0LWZ1bGxzY3JlZW4nLz5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hcCwgY29udHJvbCwgQ29udHJvbCwgRnVsbHNjcmVlbk9wdGlvbnN9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJ1bmV0dGUvbGVhZmxldC1mdWxsc2NyZWVuL2Rpc3QvTGVhZmxldC5mdWxsc2NyZWVuLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX21hcDogTWFwO1xuICBwdWJsaWMgY29udHJvbDogQ29udHJvbC5GdWxsc2NyZWVuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLmNvbnRyb2wpO1xuICAgIHRoaXMuX21hcC5vZmYoJ2VudGVyRnVsbHNjcmVlbicpO1xuICAgIHRoaXMuX21hcC5vZmYoJ2V4aXRGdWxsc2NyZWVuJylcbiAgfVxuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZ1bGxzY3JlZW5PcHRpb25zID0ge307XG5cbiAgQElucHV0KCkgc2V0IG1hcChtYXA6IE1hcCl7XG4gICAgaWYgKG1hcCkgeyBcbiAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuZnVsbHNjcmVlbih0aGlzLm9wdGlvbnMpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkVG8obWFwKTtcbiAgICAgIG1hcC5vbignZW50ZXJGdWxsc2NyZWVuJywgKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCkpO1xuICAgICAgbWFwLm9uKCdleGl0RnVsbHNjcmVlbicsICgpID0+IG1hcC5pbnZhbGlkYXRlU2l6ZSgpKTtcbiAgICB9O1xuICB9O1xuICBnZXQgbWFwKCk6IE1hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFxuICB9O1xufTtcbiJdfQ==