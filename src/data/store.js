
import { reactive } from "vue";

export const store = reactive({

  /* AppHeader */
  navbar: {
    logo: 'logo.png',
    menu: [
      {
        text: 'home',
        isActive: true,
      },
      {
        text: 'services',
        isActive: false,
      },
      {
        text: 'about',
        isActive: false,
      },
      {
        text: 'videos',
        isActive: false,
      },
      {
        text: 'blog',
        isActive: false,
      },
      {
        text: 'store',
        isActive: false,
      },
    ],
    textBtn: 'Schedule a workout',
    icons: ['fa-solid fa-cart-shopping', 'fa-solid fa-magnifying-glass'],
  },

  /* AppHero */
  hero: {
    subtitle: 'Certified fitness professional',
    title: 'Take control of your health',
    text: 'Curatibur non nulla sit amet nisi tempus convallis quis ac lectus dolor sit amet.',
    btns: [
      {
        classes: '',
        text: 'Visit my YouTube channel',
        before: 'fa-brands fa-youtube',
        after: null,
      },
      {
        classes: 'uncolored',
        text: 'Buy Avanda today',
        before: null,
        after: 'fa-solid fa-arrow-right',
      }
    ]
  },

  /* AppPlaylist */
  testimonial: {
    cards: [
      {
        image: 'service6-2x.jpg',
        title: 'Crossfit workout',
        subtitle: 'Push your limits',
        overlay: true,
        radius: true,
      },
      {
        image: 'box1-2x.jpg',
        title: 'New gym apparel',
        subtitle: 'Look good, feel good',
        overlay: true,
        radius: true,

      },
      {
        image: 'box3-2x.jpg',
        title: 'Team training',
        subtitle: 'Find a partner',
        overlay: true,
        radius: true,

      },
    ],

    blockquote: '"How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."',

    avatar: {
      name: 'Brad Johnson',
      location: 'Las Vegas',
      image: 'avatar-1-2x.jpg',
    }
  },

  /* AppChannel  */
  channelSection: {
    subtitle: 'Tune up your workouts',
    title: 'The best health & fitness advice online',
    channel: {
      logo: 'unnamed.jpg',
      name: 'ThemeFusion',
      btn: {
        classes: 'btn-lite',
        text: 'YouTube',
        before: 'fa-brands fa-youtube',
      },
    },
    text: 'Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.',
    btn: {
      classes: 'youtube-red',
      text: 'Visit my YouTube channel',
      before: 'fa-brands fa-youtube',
    }
  },

  /* AppArticlesPlaylists 1 */
  playlists: {
    sectionTitle: 'Featured playlists',
    sectionSpan: 'View all videos',
    sectionType: 'playlist',

    records: [
      {
        title: 'Thighs & glute workout',
        subtitle: 'Increase your mobility',
        card: {
          image: 'video2-2x.jpg',
          play: true,
          radius: true,
        }
      },
      {
        title: 'Lift, firm & perk up',
        subtitle: 'Feel young again',
        card: {
          image: 'video7-2x.jpg',
          play: true,
          radius: true,
        }
      },
      {
        title: 'Silm & trim your waist',
        subtitle: 'Shed those extra pounds',
        card: {
          image: 'video9-2x.jpg',
          play: true,
          radius: true,
        }
      },
    ],
  },

  /* AppCTA */
  cta:{
    subtitle: 'Join our mailing list today',
    title: 'Insider offers & flash sales in your inbox every week.',
    text: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.',
    btn: {
      text: 'Subscribe',
    },
    textCards: [
      {
        icon: 'fa-regular fa-clock',
        title: 'Team training',
        subtitle: 'Find a partner',
        desc: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
        anchor: 'Find a partner',
        type: 'bordered',
  
      },
      {
        icon: 'fa-solid fa-dumbbell',
        title: 'Team training',
        subtitle: 'Push your limits',
        desc: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
        anchor: 'Learn about Crossfit',
        type: 'bordered',
      },
      {
        icon: 'fa-regular fa-clock',
        title: 'Shed those pounds',
        subtitle: 'Find a partner',
        desc: 'At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.',
        anchor: 'Schedule a workout',
        type: 'bordered',
      },
    ],
  },
  
  /* AppArticlesPlaylists 2 */
  articles: {
    sectionTitle: 'Lastest articles',
    sectionSpan: 'Read all articles',
    sectionType: 'article',

    records: [
      {
        title: 'The best protein shake',
        subtitle: 'By admin | November 26th, 2019 | Gym',
        card: {
          image: 'blog4-2x.jpg',
        }
      },
      {
        title: 'Ultimate cardio workout',
        subtitle: 'By admin | November 26th, 2019 | Gym',
        card: {
          image: 'blog1-2x.jpg',
        }
      },
      {
        title: 'New juices available now',
        subtitle: 'By admin | November 26th, 2019 | Gym',
        card: {
          image: 'blog3-2x.jpg',
        }
      },

    ]

  },

  /* AppTestimonials */
  partners: [
    {
      image: 'sponsor-1-2x.png',
      text: 'Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.',
      anchor: 'Visit Yoga Studio',
      type: 'unbordered',

    },
    {
      image: 'sponsor-2-2x.png',
      text: 'Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.',
      anchor: 'Join Fitness Center',
      type: 'unbordered',

    },
    {
      image: 'sponsor-3-2x.png',
      text: 'Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.',
      anchor: 'Learn about FC',
      type: 'unbordered',

    },
    {
      image: 'sponsor-4-2x.png',
      text: 'Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.',
      anchor: 'Visit Power Gym',
      type: 'unbordered',

    },
  ],

  /* AppEvent */
  event:{
    title: 'Crossfit workout of the day',
    subtitle: 'November 15th, 2019',
    anchor: 'View all videos',
  },

  /* AppFooter */
  footer: {
    left: {
      logo: 'logo.png',
      text: 'Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.',
      icons: ['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-youtube', 'fa-brands fa-instagram', 'fa-brands fa-linkedin-in'],
    },
    center: {
      title: 'Recent posts',
      list: ['The best protein shake', 'Ultimate cardio workout', 'New juices available now', 'Tips to find training partners', '20 best healthy recipes']
    },
    right: {
      title: 'Contact informations',
      address: '4746 Tipple Road Michigan 48449',
      mobile: 'Mobile : 1.800.000.0000',
      email: 'Email : info@your-company.com',
    },
    copyright: '© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress',
  }

});