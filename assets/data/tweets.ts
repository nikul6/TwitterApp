const tweets = [
  {
    id: 't0',
    user: {
      id: 'u1',
      username: 'alex',
      name: 'Alex',
      image:
        'https://randomuser.me/api/portraits/men/68.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. #reactnative #coding #programming #develpoer #javascript',
    image:
      'https://www.qed42.com/sites/default/files/styles/featured_image/public/2018-11/react-native.png?itok=lj4A4r0I',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: '111111111',
    createdAt: '2023-04-28T08:30:00.000Z',
    user: {
      id: '123456789',
      name: 'Jeff B',
      username: 'bezos',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
    },
    content:
      'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. 💪 #lion #wildlife',
    image:
      'https://randompicturegenerator.com/img/lion-generator/g896724ef92b0e25b89946e484b994621312ddc44e5d684913f5667d38057d0f2c93c50391faf083db4f05b25c021c1c1_640.jpg',
    numberOfComments: 2,
    numberOfRetweets: 5,
    numberOfLikes: 25,
    impressions: 500,
  },
  {
    id: '222222222',
    createdAt: '2023-04-27T19:45:00.000Z',
    user: {
      id: '987654321',
      name: 'Zuck',
      username: 'zuck',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    },
    content: 'Had an amazing surf session this morning',
    // image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg',
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
  },
  {
    id: '333333333',
    createdAt: '2023-04-26T12:00:00.000Z',
    user: {
      id: '123456789',
      name: 'Jane Smith',
      username: 'janesmith',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    },
    content:
      'Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech',
    image:
      'https://randompicturegenerator.com/img/national-park-generator/g2f9370f6980dfc3792c38ec2768e0433fa02fb58aa64d5e492f1da3479d5fc0b9d8e2c5982fdc70e5241777c16855ccd_640.jpg',
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
  },
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'mavutoKisha',
      name: 'Mavuto Kisha',
      image:
        'https://randomuser.me/api/portraits/men/94.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially.",
    // image:
    //   'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'rurikTevita',
      name: 'Rurik Tevita',
      image:
        'https://randomuser.me/api/portraits/women/71.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://randompicturegenerator.com/img/national-park-generator/g62e65b0a93e97773f8e727aec102310707cc8c323909f0d255b11e2796704dcc8549538f97c6955f71eb383c3f88bb1d_640.jpg',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't3',
    user: {
      id: 'u1',
      username: 'ellenRyota',
      name: 'Ellen Ryota',
      image:
        'https://randomuser.me/api/portraits/women/10.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Is allowance instantly strangers applauded discourse so. Separate entrance welcomed sensible laughing why one moderate shy.',
    // image:
    //   'https://randompicturegenerator.com/img/people-generator/g8ce2dca76287a17421911ed8a95a299d9759f854d35faeb700ac8e7e51d7bcffecc118f2ca569dbd6188d24faba1ef4b_640.jpg',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'gwenethPravin',
      name: 'Gweneth Pravin',
      image:
        'https://randomuser.me/api/portraits/men/9.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://randompicturegenerator.com/img/car-generator/g9eea99cb46a0b08d4521d561dd9788383f3163d335eb709f68476e600561afdcaa297e9090a7cf64b66266cc6374d867_640.jpg',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
];

export default tweets;