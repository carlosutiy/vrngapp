import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  Listar(): Menu[] {

    let menus: Menu[] = [];

    let m1 = new Menu();
    m1.display = 'Ordens de serviço';
    m1.link = '/OrdemServico/Cadastro';
    m1.urlimg = 'assets/img/icon-clipboard-active.svg';

    menus.push(m1);

    return menus;
  }
}
