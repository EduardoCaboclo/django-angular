import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent {

  constructor(
    private route: ActivatedRoute, 
    private api:ApiService,
    private router: Router,
    private appComponente: AppComponent
    ){}
  selected_member:any;
  selected_id:any;

  ngOnInit(){
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') as string);
      this.selected_id = id;
      this.loadMember(id);
    });
    
  }


  loadMember(id:any){
    //const id =this.route.snapshot.paramMap.get('id');
    //console.log(id);

    this.api.getMember(id).subscribe({
      next: data => {
        //console.log(data);
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

  update(){
    this.api.updateMember(this.selected_member).subscribe({
      next: data => {
        //console.log(data);
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

  };


  delete(){
    this.api.deleteMember(this.selected_id).subscribe({
      next: data => {
        let index = 0;
        this.appComponente.members.forEach((e,i) =>{
          if(e.id == this.selected_id)
          index = i;
        });

        this.appComponente.members.splice(index, 1);
        


        },
        error: error => {
          console.log("Aconteceu um erro", error.message);
          },
          complete: () => {
            console.log("A operação de busca foi concluída.");
            }
          }
        );

  };






  newMember(){
    this.router.navigate(['new-member']);

  }







}
