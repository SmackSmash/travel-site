import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';
import SmoothScroll from 'smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = document.querySelectorAll('.lazyload');
    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = document.querySelectorAll('.page-section');
    this.headerLinks = document.querySelectorAll('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    for (let image of this.lazyImages) {
      image.addEventListener('load', () => {
        Waypoint.refreshAll();
        console.log('An image loaded');
      });
    }
  }

  addSmoothScrolling() {
    new SmoothScroll('a[href*="#"]');
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.headerTriggerElement,
      handler: () => {
        this.siteHeader.classList.toggle('site-header--dark');
      }
    });
  }

  createPageSectionWaypoints() {
    for (let section of this.pageSections) {
      new Waypoint({
        element: section,
        handler: direction => {
          if (direction == 'down') {
            for (let link of this.headerLinks) {
              link.classList.remove('is-current-link');
            }
            document
              .querySelector(section.getAttribute('data-matching-link'))
              .classList.add('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: section,
        handler: direction => {
          if (direction == 'up') {
            for (let link of this.headerLinks) {
              link.classList.remove('is-current-link');
            }
            document
              .querySelector(section.getAttribute('data-matching-link'))
              .classList.add('is-current-link');
          }
        },
        offset: '-40%'
      });
    }
  }
}

export default StickyHeader;
