import { Component } from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MopBank.UI';
  clients: Client[] = [];
  clientToEdit?: Client;

  constructor(private clientService: ClientService) {}

  ngOnInit() : void {
    this.clientService
    .getClient()
    .subscribe((result: Client[]) => (this.clients = result));
  }

  updateClientList(clients: Client[]){
    this.clients = clients;
  }


  initNewClient(){
    this.clientToEdit = new Client();
  }
  editClient(client: Client){
    this.clientToEdit = client;
  }

}
