import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: any = null;
  originalTitle: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (albumId) {
      this.albumsService.getAlbum(albumId).subscribe((data) => {
        this.album = data;
        this.originalTitle = data.title;
      });
    }
  }

  saveAlbum(): void {
    if (!this.album) return;
  
    console.log('Saving album:', this.album);
  
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe({
      next: (updatedAlbum) => {
        console.log('Album updated successfully:', updatedAlbum);
        this.album = { ...updatedAlbum }; 
        this.goBack();
      },
      error: (err) => console.error('Error updating album:', err)
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
