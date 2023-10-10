import CitiesReporter from './src/CitiesReporter';
import ReporterHTML from './src/FormatterHTML';
import ReporterTxt from './src/FormatterTxt';

const [out, input, format,filename] = process.argv;
console.log('here!!!!',filename);
const formaterStrategies = {
  'html': new ReporterHTML(),
  'txt': new ReporterTxt()
}
try {
  let reporter = new CitiesReporter(
    formaterStrategies[format]
   ),
   output = reporter.executeReporter(filename);
   console.log(output);
} catch (error) {
  console.log('Formato inválido!')
}

 