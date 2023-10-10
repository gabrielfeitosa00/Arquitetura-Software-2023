 
import IParser from "./IParser";
export default abstract class ParserDecorator implements IParser{
    private wrappedDecorator:IParser
   

    constructor(wrappedDecorator: IParser){
    
        this.wrappedDecorator = wrappedDecorator
    }
      parseData(data: string): string[] {
        return this.wrappedDecorator.parseData(data)
    }
}