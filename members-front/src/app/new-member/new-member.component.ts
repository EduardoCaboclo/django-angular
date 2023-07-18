import { Component } from '@angular/core';
import { ApiService } from '../members-detail/api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent {

  member = {name: '', surname:'', phone:''};

  constructor(
    private api: ApiService,
    private appComponent: AppComponent){

  }
  
  
  
  save(){
    this.api.saveNewMember(this.member).subscribe({
      next: data => {
        this.appComponent.members.push(data)
        //console.log(data);
        //this.selected_member = data;
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
