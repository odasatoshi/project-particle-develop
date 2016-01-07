/**
 * Created by nyamogera on 2016/01/06.
 */
module tool {
  export const TOOL_PEN = "tool-pen";
  export const TOOL_STAMP = "tool-stamp";
}
class Toolbar extends createjs.EventDispatcher {

  toolPenElement:HTMLLinkElement;
  toolStampElement:HTMLLinkElement;

  toolId:string;

  shapeSetting:ShapeSetting;
  drawingSetting:DrawingSetting;

  colorPickerLine:JQuery;
  colorPickerBase:JQuery;

  colorPickerLineElement:HTMLDivElement;
  colorPickerBaseElement:HTMLDivElement;

  constructor() {
    super();

    this.shapeSetting = new ShapeSetting();
    this.drawingSetting = new DrawingSetting();


    createjs.EventDispatcher.initialize(Toolbar.prototype);

    this.colorPickerLineElement = <HTMLDivElement>document.getElementById("colorpicker-line-wrap");
    this.colorPickerBaseElement = <HTMLDivElement>document.getElementById("colorpicker-base-wrap");

    this.toolPenElement = <HTMLLinkElement>document.getElementById(tool.TOOL_PEN);
    this.toolStampElement = <HTMLLinkElement>document.getElementById(tool.TOOL_STAMP);

    this.toolPenElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_PEN );
    });

    this.toolStampElement.addEventListener("click", (e:any) => {
      this.changeTab(tool.TOOL_STAMP );
    });

    //  カラーピッカー
    this.colorPickerLine = $("#colorpicker-line");
    this.colorPickerLine.spectrum({
      showPalette: true,
      color: "#000",
      change: (color:any) => {
        this.drawingSetting.lineColor = color.toHexString();
        this.shapeSetting.lineColor = color.toHexString();
        this.dispatchEvent("change_tool");
      }
    });

    this.colorPickerBase = $("#colorpicker-base");
    this.colorPickerBase.spectrum({
      showPalette: true,
      color: "#000",
      change:  (color:any) => {
      this.shapeSetting.baseColor =  color.toHexString();
        this.dispatchEvent("change_tool");
      }
    });

    this.changeTab( tool.TOOL_PEN ,false );

  }
  changeTab = (tabName:string,dispatch:boolean = true) => {

    this.colorPickerLineElement.style.display = 'none';
    this.colorPickerBaseElement.style.display = 'none';

    switch( tabName ) {
      case tool.TOOL_PEN:
        this.colorPickerLineElement.style.display = 'block';
        break;
      case tool.TOOL_STAMP:
        this.colorPickerLineElement.style.display = 'block';
        this.colorPickerBaseElement.style.display = 'block';
        break;

    }


    this.toolId = tabName;

    if( dispatch ) {
      this.dispatchEvent("change_tab");
    }
  }
}