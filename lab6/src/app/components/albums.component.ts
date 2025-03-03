import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h2>Albums</h2>
    <ul class="list-group">
      <li *ngFor="let album of albums" class="list-group-item d-flex justify-content-between">
        <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
        <button class="btn btn-danger btn-sm" (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
  `
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(albums => (this.albums = albums));
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}