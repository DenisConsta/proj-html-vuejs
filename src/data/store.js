
import { reactive } from "vue";

export const store = reactive({

  /* Testimonial */
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

  firstTextCard: {
    icon: 'fa-regular fa-clock',
    title: 'Team training',
    subtitle: 'Find a partner',
    desc: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
    anchor: 'Find a partner',
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

  /* Playlists */
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

  /* Articles */
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

  // modificare le text card per la sezione testimonials 
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

  ]


});