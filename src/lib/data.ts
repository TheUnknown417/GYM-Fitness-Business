import img_hero_main from './alexander-jawfox-Kl2t5U6Gkm0-unsplash.jpg';
import img_hero_about from './luna-active-fitness-iEpsg6OzyXw-unsplash.jpg';
import img_hero_memberships from './cathy-pham-3jAN9InapQI-unsplash.jpg';
import img_hero_testimonials from './total-shape-wXBK9JrM0iU-unsplash.jpg';

import img_about_intro from './meghan-holmes-wy_L8W0zcpI-unsplash.jpg';
import img_about_vertical from './graham-mansfield-E8VOttj22s4-unsplash.jpg';
import img_about_footer from './john-fornander-TAZoUmDqzXk-unsplash.jpg';

import img_home_training from './or-hakim-SuV4WLwJibk-unsplash.jpg';

import img_gal_1 from './aaron-brogden-9y4MaTz2Js0-unsplash.jpg';
import img_gal_2 from './arkana-asido-mD92hGCrjAM-unsplash.jpg';
import img_gal_3 from './christoph-aigner-vhj1DvszLZU-unsplash.jpg';
import img_gal_4 from './sushil-ghimire-5UbIqV58CW8-unsplash.jpg';
import img_gal_5 from './taylor-blackler-Oxmq8jyVjjE-unsplash.jpg';
import img_gal_6 from './vitaly-gariev-8a4vflYr7gs-unsplash.jpg';

// Note: Testimonial people shots are less common in generic gym packs, 
// using training closeups for testimonials to maintain high quality and uniqueness.
import img_test_1 from './meghan-holmes-wy_L8W0zcpI-unsplash.jpg';
import img_test_2 from './aaron-brogden-9y4MaTz2Js0-unsplash.jpg';

export const images = {
  // HERO IMAGES (Local)
  hero: {
    main: img_hero_main,
    about: img_hero_about,
    memberships: img_hero_memberships,
    testimonials: img_hero_testimonials,
  },

  // COACHES (Using specific local portraits from the pack)
  coaches: [
    img_gal_1, // Sarah
    img_gal_3, // Mike
    img_gal_5, // Alex
    img_gal_2, // Extra
    img_gal_4, // Extra
    img_gal_6, // Extra
  ],

  // TRAINING PHOTOS (Local)
  training: [
    img_about_intro,    // [0]
    img_about_vertical, // [1]
    img_about_footer,   // [2]
    img_home_training,  // [3]
    img_gal_1,          // [4]
    img_gal_2,          // [5]
    img_gal_3,          // [6]
    img_gal_4,          // [7]
    img_gal_5,          // [8]
    img_gal_6,          // [9]
    img_hero_main,      // [10]
    img_hero_about,     // [11]
    img_hero_memberships, // [12]
    img_hero_testimonials, // [13]
    img_about_intro,    // [14]
    img_about_vertical, // [15]
    img_about_footer,   // [16]
    img_home_training,  // [17]
  ],

  // TESTIMONIALS (Local)
  testimonials: [
    img_test_1,
    img_test_2,
    img_gal_3,
    img_gal_4,
    img_gal_5,
    img_gal_6,
  ],

  // MEMBERSHIP TYPES (Local)
  memberships: {
    semiPrivate: img_hero_memberships,
    group: img_hero_about,
    private: img_about_intro,
  }
};
