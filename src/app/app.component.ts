import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { Welcome } from './interfaces/album.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'muzik';
  albums = [];
  albumAll = [];
  catalogo = [];
  catalog: string;
  tituloCatalogo: string;

  constructor(private _api: ApiService) {

  }

  ngOnInit(): void {
    this.getAlbums();
  }


  getAlbums() {
    this._api.getAlbum().subscribe((data: any) => {
      this.albumAll = this.setAlbums(data.feed.entry);
      const genero = [];
      this.albumAll.forEach(e => {
        genero.push(e.category.attributes.label);
      });
      this.setCatalogo(genero);
    });
  }

  setAlbums = (album: any[]) => this.albums = album;

  setCatalogo = (lista) => {
    lista.filter((item, index) => lista.indexOf(item) === index).forEach(g => {
      this.catalogo.push(g);
    });
  };

  getCatalogo(catalogo) {
    const data = this.filterAlbum(this.albumAll, catalogo);
    this.tituloCatalogo = catalogo;
    this.setAlbums(data);
  }

  filterAlbum(album: any[], catalogo: string): string[] {
    return album.filter(c => c.category.attributes.label === catalogo);
  }

}
