/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;

    export class SankeyDiagramLabelsSettings {
        public static DefaultFontSize: number = 12;

        public show: boolean = true;
        public fill: string = "black";
        public fontSize: number = SankeyDiagramLabelsSettings.DefaultFontSize;
        public forceDisplay: boolean = false;
        public minHeightOfNode: number = 10;
    }

    export class SankeyDiagramLinkLabelsSettings {
        public static DefaultFontSize: number = 12;
        public show: boolean = false;
        public fill: string = "black";
        public fontSize: number = SankeyDiagramLabelsSettings.DefaultFontSize;
        public minHeightOfNode: number = 10;
    }

    export class SankeyDiagramScaleSettings {
        public x: number = 1;
        public y: number = 1;
    }

    export class SankeyLnScaleSettings {
        public show: boolean = false;
    }

    export class SankeyComplexSettings {
        public nodePositions: string = "[]";
        public viewportSize: string = "{}";
    }

    export interface ViewportSize {
        height?: string;
        width?: string;
    }

    export class SankeyDiagramSettings extends DataViewObjectsParser {
        public linkLabels: SankeyDiagramLinkLabelsSettings = new SankeyDiagramLinkLabelsSettings();
        public labels: SankeyDiagramLabelsSettings = new SankeyDiagramLabelsSettings();
        public _scale: SankeyDiagramScaleSettings = new SankeyDiagramScaleSettings();
        public scaleSettings: SankeyLnScaleSettings = new SankeyLnScaleSettings();
        public nodeComplexSettings: SankeyComplexSettings = new SankeyComplexSettings();
        public _nodePositions: SankeyDiagramNodePositionSetting[] = [];
        public _viewportSize: ViewportSize = {};
    }
}
