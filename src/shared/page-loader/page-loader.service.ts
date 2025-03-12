import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"
import * as bootstrap from 'bootstrap';


@Injectable()
export class PageLoaderService {
    private loader = new Subject<any>();
    public data = this.loader.asObservable();

    private modalInstance: any;

    constructor(@Inject(DOCUMENT) private document: Document) {}
  
    show() {
      const modalEl = this.document.getElementById("staticBackdrop");
      if (modalEl) {
        this.modalInstance = new bootstrap.Modal(modalEl);
        this.modalInstance.show();
      }
      this.loader.next(true);
    }
  
    hide() {
      if (this.modalInstance) {
        this.modalInstance.hide();
      }
      this.loader.next(false);
    }
    // public nativeElement?: HTMLElement;

    // constructor(
    //     @Inject(DOCUMENT) private document: Document
    // ) {
    // }

    // show() {
    //     const loaderEl = this.document.getElementById("staticBackdrop");

    //     console.log("Loader element found:", loaderEl);

    //     loaderEl?.setAttribute("style", "display: block; z-index: 4000");
    //     this.loader.next(true);
    // }

    // hide() {
    //     const loaderEl = this.document.getElementById("staticBackdrop");
    //     loaderEl?.setAttribute("style", "display: none;");
    //     this.loader.next(false);
    // }

}