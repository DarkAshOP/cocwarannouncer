module.exports = {
  asyncLimit: 5,
  updateInterval: 60 * 2, // 2 Minutes
  clans: [
    {
      tag: '#2QQ2VJJQ9',
      channelId: '943765289563226152'
    }
  ],
  coc: {
    apiKey: 'sh3js6dh',
  },
  discord: {
    clientId: '943774567120388116',
    userToken: 'OTQzNzc0NTY3MTIwMzg4MTE2.Yg38jw.bc0yxU_OBaGXCZIzGABTTxS7Ij4'
  },
  starColors: [
    0xff484e, // 0 Stars
    0xffbc48, // 1 Star
    0xc7ff48, // 2 Stars
    0x4dff48  // 3 Stars
  ],
  finalMinutes: 15,
  messages: {
    prepDay: {
      title: 'War has been declared',
      body: 'The battle begins %date%\n@ %time%',
      color: 0x007cff
    },
    battleDay: {
      title: 'The war has begun!',
      body: 'Attack!',
      color: 0x007cff
    },
    lastHour: {
      title: 'The final hour is upon us!',
      body: 'If you haven\'t made both of your attacks you better get on it.',
      color: 0x007cff
    },
    finalMinutes: {
      title: 'The final minutes are here!',
      body: 'If you haven\'t made both of your attacks you better get on it.',
      color: 0x007cff
    }
  }
}
