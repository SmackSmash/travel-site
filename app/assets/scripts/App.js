import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new MobileMenu();
new RevealOnScroll('.feature-item', '100%');
new RevealOnScroll('.testimonial', '90%');
new StickyHeader();
