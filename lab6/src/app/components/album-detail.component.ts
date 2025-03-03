import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  template: `
    <div *ngIf="album">
      <h2>{{ album.title }}</h2>
      <p><strong>ID:</strong> {{ album.id }}</p>
      <p><strong>User ID:</strong> {{ album.userId }}</p>

      <input [(ngModel)]="album.title" class="form-control" />
      <button class="btn btn-primary" (click)="saveAlbum()">Save</button>
      <a [routerLink]="['/albums', album.id, 'photos']" class="btn btn-info">Photos</a>
      <a routerLink="/albums" class="btn btn-secondary">Return</a>
    </div>
  `,
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data) => (this.album = data));
  }

  saveAlbum() {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe();
    }
  }
}