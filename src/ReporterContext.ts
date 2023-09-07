import IReportStrategy from "./IReporterStrategy";

export default class ReporterContext{
    private reporterStrategy: IReportStrategy;

    constructor(strategy: IReportStrategy) {
        this.reporterStrategy = strategy;
    }

 
    public setStrategy(strategy: IReportStrategy) {
        this.reporterStrategy = strategy;
    }

    public executeReporter(caminho:string){
        this.reporterStrategy.ler(caminho)
        this.reporterStrategy.parse()
       return this.reporterStrategy.reportar()
    }
}