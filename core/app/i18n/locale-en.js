System.register(["./locale-data"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var locale_data_1;
    var LocaleEnData;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleEnData = (function (_super) {
                __extends(LocaleEnData, _super);
                function LocaleEnData() {
                    _super.apply(this, arguments);
                    this.H_exportImage = "Export";
                    this.H_exportParam = "Save";
                    this.preview_head = "Preview";
                    this.settings_head = "Settings";
                    this.ST_head = "Template Settings";
                    this.SE_head = "Emitter Settings";
                    this.SE_startXVariance = "Source Position Variance X (px)";
                    this.SE_startYVariance = "Source Position Variance Y (px)";
                    this.SE_initialSpeed = "Speed (px/frame)";
                    this.SE_initialSpeedVariance = "Speed Variance (px/frame)";
                    this.SE_initialDirection = "Emit Angle (degree)";
                    this.SE_initialDirectionVariance = "Emit Angle Variance (degree)";
                    this.SE_friction = "Friction";
                    this.SE_accelerationSpeed = "Gravity";
                    this.SE_accelerationDirection = "Gravity Angle (degree)";
                    this.SE_emitFrequency = "Emit Frequency (num/sec)";
                    this.SP_head = "Particle Settings";
                    this.SP_startScale = "Start Size";
                    this.SP_startScaleVariance = "Start Size Variance";
                    this.SP_endScale = "End Size";
                    this.SP_endScaleVariance = "End Size Variance";
                    this.SP_lifeSpan = "Lifespan (frame)";
                    this.SP_lifeSpanVariance = "Lifespan Variance (frame)";
                    this.SC_head_start = "Start Color";
                    this.SC_hue = "Hue (degree)";
                    this.SC_hueVariance = "Hue Variance (degree)";
                    this.SC_saturation = "Saturation (%)";
                    this.SC_saturationVariance = "Saturation Variance (%)";
                    this.SC_luminance = "Luminance (%)";
                    this.SC_luminanceVariance = "Luminance Variance (%)";
                    this.SC_startAlpha = "Alpha";
                    this.SC_startAlphaVariance = "Alpha Variance";
                    this.SC_head_end = "End Color";
                    this.SC_endAlpha = "Alpha";
                    this.SC_endAlphaVariance = "Alpha Variance";
                    this.SC_head_alphaCurve = "Alpha Motion Type";
                    this.SC_head_blendMode = "Blend Mode";
                    this.SS_head = "Shape Settings";
                    this.SF_head = "Stage Settings";
                    this.SF_stageW = "Width (px)";
                    this.SF_stageH = "Height (px)";
                    this.SF_bgColor = "Background Color";
                }
                return LocaleEnData;
            })(locale_data_1.LocaleData);
            exports_1("LocaleEnData", LocaleEnData);
        }
    }
});
//# sourceMappingURL=locale-en.js.map