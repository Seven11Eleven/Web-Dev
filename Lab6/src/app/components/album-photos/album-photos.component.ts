import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(albumId).subscribe((data) => {
      this.photos = data;
    });
  }

  uploadPhoto(event: any): void {
    const file = event.target.files[0];
    if (file) this.albumsService.uploadPhoto(Number(this.route.snapshot.paramMap.get('id')), file).subscribe(() => this.ngOnInit());
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
