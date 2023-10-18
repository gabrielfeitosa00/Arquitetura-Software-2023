 
import FileReader from './src/FilReader';
import ReporterDirector from './src/builder/ReporterDirector';
import ReporterHTML1Builder from './src/builder/ReporterHTMLBuilder';
import ReporterTxtBuilder from './src/builder/ReporterTxtBuilder';
import BaseParser from './src/decorators/BaseParser';

const [out, input, format,filename] = process.argv;
console.log('here!!!!',filename);
const fileReader = new FileReader()
const data = fileReader.readFile('./data/cidades-2.json')
const dataCSV = fileReader.readFile('./data/cidades.csv')
const baseParser = new BaseParser(data)
// const testB = new JSONParserDecorator(baseParser,data)
// const testC = new CSVParserDecorator(testB,dataCSV)

// const output = testC.parseData()
// console.log(output)
const reporterTxtBuilder = new ReporterTxtBuilder(fileReader
    ,baseParser,
    [{path:'./data/cidades-2.json',fileType:'JSON'},
   ])

const reporterHTMLBuilder = new ReporterHTML1Builder(fileReader
    ,baseParser,  [ 
    {path:'./data/cidades.xml',fileType:'XML'},])

const reporterDirector = new ReporterDirector(reporterHTMLBuilder)

reporterDirector.makeReporter()

// reporterDirector.setBuilder(reporterHTML1Builder)
// reporterDirector.makeReporter()
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

 