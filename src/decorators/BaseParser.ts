import IParser from "./IParser";
export default class BaseParser implements IParser{
  private data:string
  constructor(data:string){
    this.data = data
  }
  parseData():  string[]  {
   console.log('Base parsing...',this.data.trim()) 
    return []
}
}