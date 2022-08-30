import { Component, OnInit, VERSION } from '@angular/core';

interface HistoryButtonConfigType {
  standard?: { enabled: boolean };
  eHealth?: { enabled: boolean };
  vna?: VnaPatientDocumentsConfigurationType;
  kopland?: KoplandPatientDocumentsConfigurationType;
}

interface VnaPatientDocumentsConfigurationType {
  enabled: boolean;
  secret: string;
  baseUrl: string;
  basePath: string;
}

 interface KoplandPatientDocumentsConfigurationType {
  enabled: boolean;
  formIntegrationUrl: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent implements OnInit  {
  
    objArr = {
    eHealth: {enabled: false},
    kopland: {enabled: false, formIntegrationUrl: ''},
    standard: {enabled: true},
    vna: {enabled: false, secret: '', basePath: '', baseUrl: ''}
    }

   
    result = {} as HistoryButtonConfigType;

    ngOnInit(){ 
      for (const [key, value] of Object.entries(this.objArr)) {             
       if(value.enabled == true){
         this.result[key] =  value
         console.log('resunt' , this.result)
      }
          
        
      }
      if(Object.keys(this.result).length < 2){
        if(this.result)
        console.log(this.result)
      }
   
      
    }
 

  name = 'eros';

  }


   






  
