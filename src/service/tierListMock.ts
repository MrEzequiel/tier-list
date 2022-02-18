import ITierList from '../interfaces/TierList'

const tierListMock: ITierList = {
  title: 'Best Programming Languages',
  id: '1',

  tiers: [
    {
      name: 'S',
      id: '1',
      color: '#ff7f7f',
      items: []
    },
    {
      name: 'A',
      id: '2',
      color: '#ffbf7f',
      items: []
    },
    {
      name: 'B',
      id: '3',
      color: '#ffdf7f',
      items: []
    },
    {
      name: 'C',
      id: '4',
      color: '#ffff7f',
      items: []
    },
    {
      name: 'D',
      id: '5',
      color: '#bfff7f',
      items: []
    }
  ],

  withoutTiers: [
    {
      id: '0',
      name: 'JavaScript',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
      id: '1',
      name: 'Python',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
    },
    {
      id: '2',
      name: 'Ruby',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png'
    },
    {
      id: '3',
      name: 'C#',
      image:
        'https://raw.githubusercontent.com/learnbr/csharp/master/csharp-logo.png'
    },
    {
      id: '4',
      name: 'C++',
      image:
        'https://www.alura.com.br/artigos/assets/formacao-linguagem-c-plus-plus/img-01.png'
    },
    {
      id: '5',
      name: 'Java',
      image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    },
    {
      id: '6',
      name: 'Kotlin',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png'
    },
    {
      id: '7',
      name: 'Swift',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732250.png'
    },
    {
      id: '8',
      name: 'C',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
    },
    {
      id: '9',
      name: 'Go',
      image:
        'https://user-images.githubusercontent.com/3613230/41752586-476b0b24-7596-11e8-95fe-8fd3faa21e8a.png'
    },
    {
      id: '10',
      name: 'Rust',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png'
    },
    {
      id: '11',
      name: 'Scala',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919834.png'
    },
    {
      id: '12',
      name: 'Haskell',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919850.png'
    },
    {
      id: '13',
      name: 'Clojure',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/2048px-Clojure_logo.svg.png'
    },
    {
      id: '14',
      name: 'Elixir',
      image:
        'https://img2.gratispng.com/20180920/fli/kisspng-elixir-functional-programming-programming-language-vanc-5ba3e361b2dde2.1886814715374672337327.jpg'
    },
    {
      id: '15',
      name: 'PHP',
      image:
        'https://cdn.iconscout.com/icon/free/png-256/php-2038871-1720084.png'
    }
  ]
}

export default tierListMock
