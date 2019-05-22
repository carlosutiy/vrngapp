import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.css']
})
export class NavsideComponent implements OnInit {
  menus: Menu[];

  constructor(private menuservice: MenuService) { }

  ngOnInit() {

    this.menus = this.menuservice.Listar();

  }

}
