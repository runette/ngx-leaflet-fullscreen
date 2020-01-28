(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet')) :
    typeof define === 'function' && define.amd ? define('@runette/ngx-leaflet-fullscreen', ['exports', '@angular/core', 'leaflet'], factory) :
    (global = global || self, factory((global.runette = global.runette || {}, global.runette['ngx-leaflet-fullscreen'] = {}), global.ng.core, global.leaflet));
}(this, (function (exports, core, leaflet) { 'use strict';

    var leaflet__default = 'default' in leaflet ? leaflet['default'] : leaflet;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var Leaflet_fullscreen = createCommonjsModule(function (module) {
    (function (factory) {
        if (typeof undefined === 'function' && undefined.amd) {
            // AMD
            undefined(['leaflet'], factory);
        } else if ('object' !== 'undefined') {
            // Node/CommonJS
            module.exports = factory(leaflet__default);
        } else {
            // Browser globals
            if (typeof window.L === 'undefined') {
                throw new Error('Leaflet must be loaded first');
            }
            factory(window.L);
        }
    }(function (L) {
        L.Control.Fullscreen = L.Control.extend({
            options: {
                position: 'topleft',
                title: {
                    'false': 'View Fullscreen',
                    'true': 'Exit Fullscreen'
                }
            },

            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-control-fullscreen leaflet-bar leaflet-control');

                this.link = L.DomUtil.create('a', 'leaflet-control-fullscreen-button leaflet-bar-part', container);
                this.link.href = '#';

                this._map = map;
                this._map.on('fullscreenchange', this._toggleTitle, this);
                this._toggleTitle();

                L.DomEvent.on(this.link, 'click', this._click, this);

                return container;
            },

            onRemove: function (map) {
                map.off('fullscreenchange', this._toggleTitle, this);
            },

            _click: function (e) {
                L.DomEvent.stopPropagation(e);
                L.DomEvent.preventDefault(e);
                this._map.toggleFullscreen(this.options);
            },

            _toggleTitle: function() {
                this.link.title = this.options.title[this._map.isFullscreen()];
            }
        });

        L.Map.include({
            isFullscreen: function () {
                return this._isFullscreen || false;
            },

            toggleFullscreen: function (options) {
                var container = this.getContainer();
                if (this.isFullscreen()) {
                    if (options && options.pseudoFullscreen) {
                        this._disablePseudoFullscreen(container);
                    } else if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    } else {
                        this._disablePseudoFullscreen(container);
                    }
                } else {
                    if (options && options.pseudoFullscreen) {
                        this._enablePseudoFullscreen(container);
                    } else if (container.requestFullscreen) {
                        container.requestFullscreen();
                    } else if (container.mozRequestFullScreen) {
                        container.mozRequestFullScreen();
                    } else if (container.webkitRequestFullscreen) {
                        container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    } else if (container.msRequestFullscreen) {
                        container.msRequestFullscreen();
                    } else {
                        this._enablePseudoFullscreen(container);
                    }
                }

            },

            _enablePseudoFullscreen: function (container) {
                L.DomUtil.addClass(container, 'leaflet-pseudo-fullscreen');
                this._setFullscreen(true);
                this.fire('fullscreenchange');
            },

            _disablePseudoFullscreen: function (container) {
                L.DomUtil.removeClass(container, 'leaflet-pseudo-fullscreen');
                this._setFullscreen(false);
                this.fire('fullscreenchange');
            },

            _setFullscreen: function(fullscreen) {
                this._isFullscreen = fullscreen;
                var container = this.getContainer();
                if (fullscreen) {
                    L.DomUtil.addClass(container, 'leaflet-fullscreen-on');
                } else {
                    L.DomUtil.removeClass(container, 'leaflet-fullscreen-on');
                }
                this.invalidateSize();
            },

            _onFullscreenChange: function (e) {
                var fullscreenElement =
                    document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement ||
                    document.msFullscreenElement;

                if (fullscreenElement === this.getContainer() && !this._isFullscreen) {
                    this._setFullscreen(true);
                    this.fire('fullscreenchange');
                } else if (fullscreenElement !== this.getContainer() && this._isFullscreen) {
                    this._setFullscreen(false);
                    this.fire('fullscreenchange');
                }
            }
        });

        L.Map.mergeOptions({
            fullscreenControl: false
        });

        L.Map.addInitHook(function () {
            if (this.options.fullscreenControl) {
                this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl);
                this.addControl(this.fullscreenControl);
            }

            var fullscreenchange;

            if ('onfullscreenchange' in document) {
                fullscreenchange = 'fullscreenchange';
            } else if ('onmozfullscreenchange' in document) {
                fullscreenchange = 'mozfullscreenchange';
            } else if ('onwebkitfullscreenchange' in document) {
                fullscreenchange = 'webkitfullscreenchange';
            } else if ('onmsfullscreenchange' in document) {
                fullscreenchange = 'MSFullscreenChange';
            }

            if (fullscreenchange) {
                var onFullscreenChange = L.bind(this._onFullscreenChange, this);

                this.whenReady(function () {
                    L.DomEvent.on(document, fullscreenchange, onFullscreenChange);
                });

                this.on('unload', function () {
                    L.DomEvent.off(document, fullscreenchange, onFullscreenChange);
                });
            }
        });

        L.control.fullscreen = function (options) {
            return new L.Control.Fullscreen(options);
        };
    }));
    });

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-leaflet-fullscreen.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    this.control = leaflet.control.fullscreen(this.options);
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
            { type: core.Component, args: [{
                        selector: 'leaflet-fullscreen-control',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        FullscreenControlComponent.ctorParameters = function () { return []; };
        FullscreenControlComponent.propDecorators = {
            options: [{ type: core.Input }],
            map: [{ type: core.Input }]
        };
        return FullscreenControlComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-leaflet-fullscreen.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLeafletFullscreenModule = /** @class */ (function () {
        function NgxLeafletFullscreenModule() {
        }
        NgxLeafletFullscreenModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FullscreenControlComponent],
                        imports: [],
                        exports: [FullscreenControlComponent]
                    },] }
        ];
        return NgxLeafletFullscreenModule;
    }());

    exports.FullscreenControlComponent = FullscreenControlComponent;
    exports.NgxLeafletFullscreenModule = NgxLeafletFullscreenModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=runette-ngx-leaflet-fullscreen.umd.js.map
