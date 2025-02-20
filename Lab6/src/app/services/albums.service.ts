import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  id: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  createAlbum(title: string): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, { title });
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(id: number, title: string): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${id}`, { title });
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }

  uploadPhoto(albumId: number, file: File): Observable<Photo> {
    const formData = new FormData();
    formData.append('photo', file);
    return this.http.post<Photo>(`${this.baseUrl}/albums/${albumId}/photos`, formData);
  }
}
