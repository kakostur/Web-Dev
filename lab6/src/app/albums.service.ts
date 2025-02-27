import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private cachedAlbums: any[] = [];

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching albums:', error);
        throw error;
      })
    );
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching album with id=${id}:`, error);
        throw error;
      })
    );
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error deleting album with id=${id}:`, error);
        throw error;
      })
    );
  }

  createAlbum(album: { title: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, album).pipe(
      catchError(error => {
        console.error('Error creating album:', error);
        throw error;
      })
    );
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}
