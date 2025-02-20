import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService, Album } from '../../services/albums.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newTitle = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  createAlbum(): void {
    if (!this.newTitle.trim()) return;
    this.albumsService.createAlbum(this.newTitle).subscribe(() => {
      this.newTitle = '';
      this.loadAlbums();
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.loadAlbums();
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
