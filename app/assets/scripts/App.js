import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

new MobileMenu();
new RevealOnScroll('.feature-item', '100%');
new RevealOnScroll('.testimonial', '90%');
new StickyHeader();
new Modal();
