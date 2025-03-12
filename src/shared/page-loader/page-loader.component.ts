import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageLoaderService } from './page-loader.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css'],
})
export class PageLoaderComponent implements OnInit {

  public showLoader: boolean = false;

  constructor(
    public loaderService: PageLoaderService,
    public componentElement: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {

    // this.loaderService.nativeElement = this.componentElement.nativeElement;

    // reposition page loader
    const pageLoader = this.componentElement.nativeElement.querySelector("div");
    this.document.body.appendChild(pageLoader);

    // listen for page loader change
    this.loaderService.data.subscribe((state: any) => {
      this.showLoader = state;
    });

  }
}
