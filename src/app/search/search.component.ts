import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  constructor(private _http: HttpService) { }

  searchword : string = "";

  medias: Array<any> = [];

  receivedNoResults:boolean = false;

  ngOnInit(): void {
  }

  onEnter(){
    return this._http.getSearchResults(this.searchword).subscribe(data=>{
      let items = (data as any).collection.items.map((item :any)=>({
        ...(item as any).data[0],
        thumbnail:((item as any).links)?(item as any).links[0].href:''
      }));
      this.medias = items;
      if(this.medias.length===0)
        this.receivedNoResults=true;
    })
  }


  onClick(event :Event){
    event.preventDefault();
}


}
