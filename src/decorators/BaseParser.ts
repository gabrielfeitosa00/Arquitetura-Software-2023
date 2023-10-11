import IParser from "./IParser";
export default class BaseParser implements IParser{
  private data:string
  constructor(data:string){
    this.data = data
  }
  parseData():  string[]  {
   
    return this.data.trim().split('')
}
}