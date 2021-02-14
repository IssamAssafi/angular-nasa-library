import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private _location:Location
  ) { }


  type:string='';
  id:string|null='';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = history.state.data.type;
  }

  getMediaURL(){
    let extension = (this.type==='image')?'jpg':'mp4';
    return `http://images-assets.nasa.gov/${this.type}/${this.id}/${this.id}~orig.${extension}`;
  }
  
  goBack() {
    this._location.back();
  }
}
