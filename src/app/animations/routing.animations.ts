import {
  animate,
  group,
  keyframes,
  query,
  style,
  trigger,
  transition,
  animateChild
} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
  transition('OverviewPage => ResultPage', slideRoutes()),
  transition('ResultPage => OverviewPage', slideRoutes())
]);

export function slideRoutes() {
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          right: '0'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ right: '-100%' })]),
    group([
      query(':leave', [animate('600ms 200ms ease', style({ right: '100%' }))], {
        optional: true
      }),
      query(
        ':enter',
        [animate('600ms 200ms ease', style({ right: '0%' })), animateChild()],
        {
          optional: true
        }
      )
    ])
  ];
}
