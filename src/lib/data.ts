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

// NEW IMAGES (V7)
import img_new_portrait_1 from './attractive-athletic-girl-stands-wall-simulators-gym-healthy-lifestyle.jpg';
import img_new_portrait_2 from './portrait-fit-young-woman-exercising-with-dumbbells-gym.jpg';
import img_new_portrait_3 from './portrait-young-woman-holding-dumbbell-gym.jpg';
import img_new_gym_1 from './pexels-ivan-s-4164758.jpg';
import img_new_gym_2 from './pexels-ketut-subiyanto-4853698.jpg';
import img_new_gym_3 from './pexels-olly-3768913.jpg';

// MALE PORTRAIT (V8)
import img_male_coach from './vitaly-gariev-8a4vflYr7gs-unsplash.jpg';

export const images = {
  // HERO IMAGES (Local)
  hero: {
    main: img_hero_main,
    about: img_hero_about,
    memberships: img_hero_memberships,
    testimonials: img_hero_testimonials,
  },

  // COACHES (Using high-quality portraits)
  coaches: [
    img_new_portrait_1, // Sarah (Female)
    img_male_coach,      // Mike (Male - Fixed V8)
    img_new_portrait_3, // Alex (Female)
    img_gal_2,          // Extra
    img_gal_4,          // Extra
    img_gal_6,          // Extra
  ],

  // TRAINING PHOTOS (Local - Unique indices)
  training: [
    img_about_intro,      // [0]
    img_about_vertical,   // [1]
    img_about_footer,     // [2]
    img_home_training,    // [3]
    img_new_gym_1,        // [4]
    img_new_gym_2,        // [5]
    img_new_gym_3,        // [6]
    img_gal_1,            // [7]
    img_gal_2,            // [8]
    img_gal_3,            // [9]
    img_gal_4,            // [10]
    img_gal_5,            // [11]
    img_gal_6,            // [12]
    img_hero_main,        // [13]
    img_hero_about,       // [14]
    img_hero_memberships, // [15]
    img_hero_testimonials, // [16]
    img_new_gym_1,        // [17]
  ],

  // TESTIMONIALS (Using unique new portrait and gym shots)
  testimonials: [
    img_new_portrait_1,
    img_male_coach,
    img_new_portrait_3,
    img_new_gym_1,
    img_new_gym_2,
    img_new_gym_3,
  ],

  // MEMBERSHIP TYPES (Local)
  memberships: {
    semiPrivate: img_hero_memberships,
    group: img_hero_about,
    private: img_about_intro,
  }
};
