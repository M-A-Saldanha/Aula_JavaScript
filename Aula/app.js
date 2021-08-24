
const prices = [20,30,40,50,60,70,80]

const salePrices = prices.map(price => price / 2)

console.log(prices)
console.log(salePrices)



const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
    if (product.price >= 30){
        return {name: product.name, price: product.price / 2 } // deve-se criar um novo objeto para não alterar o original.
    }
    return product
})

console.log(saleProducts)
console.log(products)



const numbers = [30,40,50,20,70,60]

const numbermaiorque50 = numbers.filter(item => item > 50)

console.log(numbermaiorque50,numbers)



const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)



const numeros = [1,2,3]

const sumNumeros = numeros.reduce((accumulator,item) => accumulator + item,0)

console.log(numeros,sumNumeros)



const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const rogerScore = phaseScores.reduce((accumulator,phaseScore) => {
      if(phaseScore.name =='Roger Melo')
      {
          accumulator += phaseScore.score
      }
        return accumulator
  },0)

console.log(rogerScore)
