import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from "@angular/core";

@Directive({
    selector: "[appCustomBackground]",
})
export class CustomBackgroundDirective implements OnInit{
    @Input() defaultColor: string = 'white';
    @Input('appCustomBackground') highlightColor: string = 'lightgreen';

    @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.bgColor = this.defaultColor;
    }

    @HostListener('mouseenter') onMouseEnter(event: Event) {
        this.bgColor = this.highlightColor;
    }
    @HostListener('mouseleave') onMouseLeave(event: Event) {
        this.bgColor = this.defaultColor;
    }
}