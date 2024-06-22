import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: 1,
      name: 'Inicio',
      icon: 'far fa-home'
    },

    {
      number: 2,
      name: 'Experiencia',
      icon: 'far fa-code'
    },

    {
      number: 3,
      name: 'Proyectos',
      icon: 'far fa-suitcase'
    },

    {
      number: 4,
      name: 'Certificaciones',
      icon: 'far fa-file-certificate'
    },
  ];

  constructor(){}
  ngOnInit(): void {}
}
