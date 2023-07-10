import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent {

  constructor(private route: ActivatedRoute, private api:ApiService){}
  selected_member:any;

  ngOnInit(){
    this.loadMember();
  }


  loadMember(){
    const id =this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getMember(id).subscribe({
      next: data => {
        console.log(data);
        this.selected_member = data;
        },
        error: error => {
          console.log("Aconteceu um erro", error.message);
          },
          complete: () => {
            console.log("A operação de busca foi concluída.");
            }
          }
        );
  }

}
