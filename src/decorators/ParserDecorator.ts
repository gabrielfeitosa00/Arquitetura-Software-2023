 
import IParser from "./IParser";
export default class ParserDecorator implements IParser{
    private wrappedDecorator:IParser
   
    private data:string
    constructor(wrappedDecorator: IParser,data:string){
    
        this.wrappedDecorator = wrappedDecorator
        this.data = data
    }
      parseData( ): string[] {
        return this.wrappedDecorator.parseData()
    }

    getData(){
        return this.data
    }
}