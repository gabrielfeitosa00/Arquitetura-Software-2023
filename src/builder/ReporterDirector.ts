import IReporterBuilder from "./IReporterBuilder";

export default class ReporterDirector{
    private reporterBuilder:IReporterBuilder

    constructor(reporterBuilder: IReporterBuilder){
        this.reporterBuilder = reporterBuilder;
    }

    makeReporter():void{
        const data = this.reporterBuilder.dataInput();
        this.reporterBuilder.dataOutput(data);
    }

    setBuilder(reporterBuilder: IReporterBuilder):void{
        this.reporterBuilder=reporterBuilder;
    }
}