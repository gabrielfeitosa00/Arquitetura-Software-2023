import ReporterHTML from './src/FormatterHTML';
import ReporterTxt from './src/FormatterTxt';
import Reporter from './src/Reporter';

const [cmd, filename, format] = process.argv;
console.log(format);
const formaterStrategies = {
  'html': new ReporterHTML(),
  'txt': new ReporterTxt()
}
try {
  let reporter = new Reporter(
    formaterStrategies[format]
   ),
   output = reporter.executeReporter(filename);
   console.log(output);
} catch (error) {
  console.log('Formato inválido!')
}

 