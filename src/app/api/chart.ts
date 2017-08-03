import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { CoinIdentifierList } from "app/api/coinIdentifierList" 

@inject(HttpClient, CoinIdentifierList)
export class ChartApi {
    constructor(private http: HttpClient, public coinIdentifierList: CoinIdentifierList ) {
        this.coinIdentifierList = coinIdentifierList;
    }
    


    public async getAllChartData() {
       
        let chartData = new ChartData();
        let responses = await this.getAllRepsonses();       

        this.getChartDataLabels(responses, chartData);
        this.getDataSets(responses, chartData);
        debugger;
        return chartData;
        
    }

    private async getAllRepsonses() {
         let responses = new Array<[string, Response]>();
         for (let identifier of this.coinIdentifierList.coinIdentifiers ) {
            
            if(identifier.code != "BTC") {
            let response = await this.http.fetch("https://min-api.cryptocompare.com/data/histohour?fsym="+ identifier.code +"&tsym=EUR&limit=24&e=CCCAGG");        
            
            let json = await response.json() as Response;          
            responses.push([identifier.name, json]);            
            }
        };
        return responses;
    }

    private getChartDataLabels(responses: Array<[string, Response]>, chartData: ChartData) {
        if (responses.length > 0) {
            responses[0][1].Data.forEach(item => {            
            chartData.labels.push(this.getTimeFromUnixTime(item.time));
            })    
        }      
    }

    private getDataSets(responses: Array<[string, Response]>, chartData: ChartData) {
        responses.forEach(response => {
            let dataset =this.getDataSet(response[0], response[1])
            chartData.datasets.push(dataset);
        })
    }


    private getDataSet(label: string, response: Response) {
        
        let dataset = new DataSet;
        dataset.label = label;
        
        response.Data.forEach(item => {
            dataset.data.push(item.high);        
        });                
        return dataset;
    }

    private getTimeFromUnixTime(unixTime) {
        var date = new Date(unixTime*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        //var seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2);
    }

}

export class ChartData {    
    public labels : Array<string>
    public datasets: Array<DataSet>    
    constructor() {
        this.labels = new Array<string>();
        this.datasets = new Array<DataSet>();
    }
    
    
}

export class DataSet {
    constructor() {
        this.data = new Array<number>();
    }
    
     public label: string;
     public fillColor: string = "rgba(151,187,205,0.2)";          
     public strokeColor: string = "rgba(151,187,205,1)";         
     public pointColor: string = "rgba(151,187,205,1)";          
     public pointStrokeColor: string = "#fff";    
     public pointHighlightFill: string = "#fff";  
     public pointHighlightStroke: string = "rgba(151,187,205,1)";
    public data: number[]; 
}

export class Response {
    Response: string;
        Type: number;
        Aggregated: boolean;
        Data: Datum[];
        TimeTo: number;
        TimeFrom: number;
        FirstValueInArray: boolean;     
}

export interface Datum {
        time: number;
        close: number;
        high: number;
        low: number;
        open: number;
        volumefrom: number;
        volumeto: number;
    }

