import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService, Photo } from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Album Photos</h2>
    <div class="row">
      <div *ngFor="let photo of photos" class="col-md-3 mb-3">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" class="img-thumbnail" />
      </div>
    </div>
    <a routerLink="/albums" class="btn btn-secondary">Return</a>
  `,
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(albumId).subscribe((data) => (this.photos = data));
  }
}