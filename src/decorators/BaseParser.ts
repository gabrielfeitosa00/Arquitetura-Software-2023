import IParser from "./IParser";
export default class BaseParser implements IParser{

  parseData(data: string):  string[]  {
   
    return data.trim().split('')
}
}