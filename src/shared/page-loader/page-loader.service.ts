import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core"
import { BehaviorSubject, Subject } from "rxjs"

@Injectable()
export class PageLoaderService {
    private loader = new Subject<any>();
    public data = this.loader.asObservable();
    public nativeElement?: HTMLElement;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    show() {
        const loaderEl = this.document.getElementById("staticBackdrop");
        loaderEl?.setAttribute("style", "display: block; z-index: 4000");
        this.loader.next(true);
    }

    hide() {
        const loaderEl = this.document.getElementById("staticBackdrop");
        loaderEl?.setAttribute("style", "display: none;");
        this.loader.next(true);
    }

}