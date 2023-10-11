 
import FileReader from './src/FilReader';
import BaseParser from './src/decorators/BaseParser';
import CSVParserDecorator from './src/decorators/CSVParserDecorator';
import JSONParserDecorator from './src/decorators/JSONParserDecorator';

const [out, input, format,filename] = process.argv;
console.log('here!!!!',filename);
const fileReader = new FileReader()
const data = fileReader.readFile('./data/cidades-2.json')
const dataCSV = fileReader.readFile('./data/cidades.csv')
const testA = new BaseParser(data)
const testB = new JSONParserDecorator(testA,data)
const testC = new CSVParserDecorator(testB,dataCSV)

const output = testC.parseData()
console.log(output)
// const formaterStrategies = {
//   'html': new ReporterHTML(),
//   'txt': new ReporterTxt()
// }
// try {
//   let reporter = new CitiesReporter(
//     formaterStrategies[format]
//    ),
//    output = reporter.executeReporter(filename);
//    console.log(output);
// } catch (error) {
//   console.log('Formato inválido!')
// }

 