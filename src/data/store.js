
import { reactive } from "vue";

export const store = reactive({

  firstCard: {
    image: 'service6-2x.jpg',
    title: 'Crossfit workout',
    subtitle: 'Push your limits',
    overlay: true,
    radius: true,
  },
  secondCard: {
    image: 'box1-2x.jpg',
    title: 'New gym apparel',
    subtitle: 'Look good, feel good',
    overlay: true,
    radius: true,

  },
  thirdCard: {
    image: 'box3-2x.jpg',
    title: 'Team training',
    subtitle: 'Find a partner',
    overlay: true,
    radius: true,
    
  },

  firstPlaylist: {
    image: 'video2-2x.jpg',
    play: true,
    radius: true,

  },
  secondPlaylist: {
    image: 'video7-2x.jpg',
    play: true,
    radius: true,


  },
  thirdPlaylist: {
    image: 'video9-2x.jpg',
    play: true,
    radius: true,


  },


});