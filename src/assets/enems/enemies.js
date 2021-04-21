let c = require.context('.', false, /\.png$/);

export default {
  levels: [50],
  data: {
    50: {
      regular: {
        lion: {
          name: 'Лев',
          image: c('./lion.png')
        },
        lynx: {
          name: 'Рысь',
          image: c('./lynx.png')
        },
        puma: {
          name: 'Пума',
          image: c('./puma.png')
        },
        tiger: {
          name: 'Тигр',
          image: c('./tiger.png')
        }
      },
      boss: {
        floppa: {
          name: 'Шлёпа',
          image: c('./boss/floppa.png')
        },
        rino: {
          name: 'Рено Логан #000 цвета XX века',
          image: c('./boss/rino.png')
        }
      }
    }
  }
}