import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  @Input() client?: Client; 
  @Output() clientsUpdated = new EventEmitter<Client[]>();

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    
  }
  updateClient(client:Client) {
    this.clientService
    .updateClient(client)
    .subscribe((clients: Client[]) => this.clientsUpdated.emit(clients));
  }
  deleteClient(client:Client) {
    this.clientService
    .deleteClient(client)
    .subscribe((clients: Client[]) => this.clientsUpdated.emit(clients));
  }
  createClient(client:Client) {
    this.clientService
    .createClient(client)
    .subscribe((clients: Client[]) => this.clientsUpdated.emit(clients));
  }

}
