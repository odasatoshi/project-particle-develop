"use strict";

import {Component} from "angular2/core";
import {DrawingData} from "../data/data-drawing";

@Component({
  selector: "input-range",
  templateUrl: "app/components/template/input-range.html",
  inputs: ["drawingData", "targetProperty", "label", "min", "max", "step"]
})
/**
 * Input タグ (range type)のコンポーネントです。
 * @author ICS-Ikeda
 * @since 2016-01-20
 */
export class InputRangeComponent {
  private drawingData:DrawingData;
  /** 対象のプロパティー名を指定します。 */
  private targetProperty:string;
  /** ラベルの名称を指定します。 */
  private label:string;
  /** 最小値を指定します。 */
  private min:number;
  /** 最大値を指定します。 */
  private max:number;
  /** ラベル間の間隔を示す数値を指定します。 */
  private step:number;

  constructor() {
  }

  private handleChange(event:any):void{
    // なぜか string 担っている可能性がある
    const value:any = this.drawingData[this.targetProperty];
    // そのため、明示的な型変換を行う
    this.drawingData[this.targetProperty] = Number(value);
  }
}
