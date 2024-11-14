import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaintsComponent } from './paints/paints.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: '',                       // Nombre de la ruta para acceder
    title: 'Pagina Principal',      // Tituol del contenido actual (aparecera en la pestaña del navegador)
    component: HomeComponent,       // Componente que se mostrará
  },
  {
    path: 'artistas',
    title: 'Tambien Principal',
    component: ArtistsComponent,
  },
  {
    path: 'contactos',
    title: 'Also pagPrincipal',
    component: ContactsComponent,
  },
  {
    path: 'galeria',
    title: 'Galeria aka "Pagina Principal"',
    component: GalleryComponent,
  },
  {
    path: 'cuadros',
    title: 'Cuadros',
    component: PaintsComponent,
  },
  {
    path: '**',
    title: 'Error',
    component: ErrorComponent,
  },

];
