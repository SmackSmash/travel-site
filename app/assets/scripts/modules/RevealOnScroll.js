import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideInitially();
    this.createWaypoints();
  }
  hideInitially() {
    for (let item of this.itemsToReveal) {
      item.classList.add('reveal-item');
    }
  }
  createWaypoints() {
    for (let item of this.itemsToReveal) {
      new Waypoint({
        element: item,
        handler: () => {
          item.classList.add('reveal-item--is-visible');
        },
        offset: '100%'
      });
    }
  }
}

export default RevealOnScroll;
