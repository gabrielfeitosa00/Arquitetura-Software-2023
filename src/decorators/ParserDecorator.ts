 
import IParser from "./IParser";
export default abstract class ParserDecorator implements IParser{
    private wrappedReader:IParser
   

    constructor(wrappedReader: IParser){
    
        this.wrappedReader = wrappedReader
    }
      parseData(data: string): string[] {
        return this.wrappedReader.parseData(data)
    }
}