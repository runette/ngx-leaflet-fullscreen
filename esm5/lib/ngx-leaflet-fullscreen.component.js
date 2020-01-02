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
        this.map.removeControl(this.control);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxlYWZsZXQtZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnVuZXR0ZS9uZ3gtbGVhZmxldC1mdWxsc2NyZWVuLyIsInNvdXJjZXMiOlsibGliL25neC1sZWFmbGV0LWZ1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBNkIsTUFBTSxTQUFTLENBQUM7QUFDakUsT0FBTyxpRkFBaUYsQ0FBQztBQUV6RjtJQVNFO1FBU1MsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFUekIsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFJRCxzQkFBYSwyQ0FBRzs7OztRQVNoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNsQixDQUFDOzs7OztRQVhELFVBQWlCLEdBQVE7WUFDdkIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixHQUFHLENBQUMsRUFBRSxDQUFDLGlCQUFpQjs7O2dCQUFFLGNBQU0sT0FBQSxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7OztnQkFBRSxjQUFNLE9BQUEsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFwQixDQUFvQixFQUFDLENBQUM7YUFDdEQ7WUFBQSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBR0QsQ0FBQzs7Z0JBL0JILFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsRUFBRTtpQkFFYjs7Ozs7MEJBY0UsS0FBSztzQkFFTCxLQUFLOztJQVlSLGlDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksMEJBQTBCOzs7Ozs7SUFDckMsMENBQWtCOzs7OztJQUNsQiw2Q0FBeUI7O0lBV3pCLDZDQUF5Qzs7OztBQWMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz0nQHJ1bmV0dGUvbGVhZmxldC1mdWxsc2NyZWVuJy8+XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXAsIGNvbnRyb2wsIENvbnRyb2wsIEZ1bGxzY3JlZW5PcHRpb25zfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BydW5ldHRlL2xlYWZsZXQtZnVsbHNjcmVlbi9kaXN0L0xlYWZsZXQuZnVsbHNjcmVlbi5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tYXA6IE1hcDtcbiAgcHJpdmF0ZSBjb250cm9sOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5yZW1vdmVDb250cm9sKHRoaXMuY29udHJvbClcbiAgfVxuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZ1bGxzY3JlZW5PcHRpb25zID0ge307XG5cbiAgQElucHV0KCkgc2V0IG1hcChtYXA6IE1hcCl7XG4gICAgaWYgKG1hcCkgeyBcbiAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuZnVsbHNjcmVlbih0aGlzLm9wdGlvbnMpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkVG8obWFwKTtcbiAgICAgIG1hcC5vbignZW50ZXJGdWxsc2NyZWVuJywgKCkgPT4gbWFwLmludmFsaWRhdGVTaXplKCkpO1xuICAgICAgbWFwLm9uKCdleGl0RnVsbHNjcmVlbicsICgpID0+IG1hcC5pbnZhbGlkYXRlU2l6ZSgpKTtcbiAgICB9O1xuICB9O1xuICBnZXQgbWFwKCk6IE1hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFxuICB9O1xufTtcbiJdfQ==