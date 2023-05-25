import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = "Client";

  constructor(private http: HttpClient) { }

  public getClient() : Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateClient(client : Client) : Observable<Client[]> {
    return this.http.put<Client[]>(
    `${environment.apiUrl}/${this.url}`,
    client
    );
  }
  public createClient(client : Client) : Observable<Client[]> {
    return this.http.post<Client[]>(
    `${environment.apiUrl}/${this.url}`,
    client
    ); 
  }
  public deleteClient(client : Client) : Observable<Client[]> {
    return this.http.delete<Client[]>(
    `${environment.apiUrl}/${this.url}/${client.id}`
    );
    }

  }