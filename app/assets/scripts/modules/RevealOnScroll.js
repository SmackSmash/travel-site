import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class RevealOnScroll {
  constructor(items, offset) {
    this.itemsToReveal = document.querySelectorAll(items);
    this.offset = offset;
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
        offset: this.offset
      });
    }
  }
}

export default RevealOnScroll;
