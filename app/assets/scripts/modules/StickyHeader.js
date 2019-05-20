import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.headerTriggerElement,
      handler: () => {
        this.siteHeader.classList.toggle('site-header--dark');
      }
    });
  }
}

export default StickyHeader;
