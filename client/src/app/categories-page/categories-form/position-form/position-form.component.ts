import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PositionService} from "../../../shared/services/position.service";
import {MaterialInstance, MaterialService} from "../../../shared/classes/material.service";

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.less']
})
export class PositionFormComponent implements OnInit ,AfterViewInit,OnDestroy {
  @Input('categoryId') categoryId:string
  @ViewChild('modal',{static:false}) modalRef:ElementRef
  positions:Position[] = []
  loading = false
  modal:MaterialInstance
  constructor(private positionsService:PositionService) { }

  ngOnInit() {
  this.loading = true
    this.positionsService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions
      this.loading = false
    })
  }
  ngOnDestroy(): void {
    this.modal.destroy()
  }

  ngAfterViewInit(): void {
   this.modal = MaterialService.initModal(this.modalRef)
  }
  onSelectPosition(position:Position){
    this.modal.open()
  }
  onAddPosition(){
    this.modal.open()
  }
  onCancel(){
    this.modal.close()
  }
}
