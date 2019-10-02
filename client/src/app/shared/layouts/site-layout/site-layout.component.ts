import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MaterialService} from "../../classes/material.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.less']
})
export class SiteLayoutComponent implements AfterViewInit{
  @ViewChild('floating',{static:false}) floatingRef:ElementRef

  links = [
    {url:'/overview',name:'Обзор'},
    {url:'/analytics',name:'Аналитика'},
    {url:'/history',name:'История'},
    {url:'/order',name:'Добавление заказа'},
    {url:'/category',name:'Ассортимент'},
  ]
  constructor(private auth:AuthService,private router:Router) { }

  ngAfterViewInit(){
    MaterialService.initiaLizeFloatingButton(this.floatingRef)
  }

  logout(event:Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
