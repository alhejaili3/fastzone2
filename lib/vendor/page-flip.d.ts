export class PageFlip {
 constructor(element:HTMLElement,settings:Record<string,unknown>);
 loadFromHTML(elements:HTMLElement[]):void;
 on(event:string,callback:(event:{data:any})=>void):void;
 destroy():void;update():void;
 flipNext(corner?:string):void;flipPrev(corner?:string):void;
 turnToPage(page:number):void;turnToNextPage():void;turnToPrevPage():void;
 getCurrentPageIndex():number;getOrientation():string;
 getPage(index:number):{setDensity(density:string):void};
}
