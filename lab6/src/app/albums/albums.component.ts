import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  album: any = null;
  photos: { [key: number]: any[] } = {};
  newAlbumTitle: string = '';


  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    console.log('Проверка состояния history.state:', history.state);

    if (history.state.updatedAlbum) {
      const updated = history.state.updatedAlbum;
      const index = this.albums.findIndex(album => album.id === updated.id);

      if (index !== -1) {
        console.log(`Обновление альбома с id=${updated.id}`);
        this.albums[index] = updated;
      } else {
        console.log('The album was not found, so we are uploading it again...');
        this.fetchAlbums();
      }
    } else {
      this.fetchAlbums();
    }
  }

  

  private fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        if (!data || !Array.isArray(data)) {
          console.error('error: incorrect data was received from the API', data);
          return;
        }
        console.log('Albums received:', data);
        this.albums = data;
        this.loadPhotos();
      },
      error: (err) => console.error('Album loading error:', err)
    });
  }

  private loadPhotos(): void {
    console.log('Uploading photos for albums:', this.albums);

    this.albums.forEach(album => {
      this.albumsService.getPhotos(album.id).subscribe({
        next: (photos) => {
          if (!photos || !Array.isArray(photos)) {
            console.error(`error: incorrect photo data for the album ${album.id}`, photos);
            return;
          }
          console.log(`Photo for the album ${album.id}:`, photos);
          this.photos[album.id] = photos.slice(0, 1);
        },
        error: (err) => console.error(`Photo upload error for album ${album.id}:`, err)
      });
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        console.log(`Альбом с id=${id} удалён`);
        this.albums = this.albums.filter(album => album.id !== id);
        delete this.photos[id];
      },
      error: (err) => console.error(`Ошибка удаления альбома ${id}:`, err)
    });
  }

  createAlbum(): void {
    if (!this.newAlbumTitle.trim()) {
      return; 
    }
  
    const newAlbum = { title: this.newAlbumTitle };
  
    this.albumsService.createAlbum(newAlbum).subscribe(createdAlbum => {
      console.log('Album created:', createdAlbum);
      this.albums = [createdAlbum, ...this.albums]; 
      this.newAlbumTitle = ''; 
    });
  }
}
