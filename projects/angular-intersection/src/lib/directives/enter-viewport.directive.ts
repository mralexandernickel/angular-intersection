import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { AbstractViewportDirective } from './abstract.viewport.directive';
import { IntersectionPresentService } from '../services/intersection-present.service';
import { Callbacks } from '../services/intersection-observer.service';

@Directive({
  selector: '[libEnterViewport]',
  exportAs: 'libEnterViewport'
})
export class EnterViewportDirective extends AbstractViewportDirective {
  @Output('libEnterViewport') intersectionEmitter: EventEmitter<
    any
  > = new EventEmitter();

  public callbacks: Callbacks = {
    enter: this.emitIntersection.bind(this)
  };

  constructor(
    public elRef: ElementRef,
    public intersectionPresentService: IntersectionPresentService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(elRef, intersectionPresentService, platformId);
  }
}
