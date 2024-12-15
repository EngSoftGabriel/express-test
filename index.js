const express = require('express')
const app = express()

const midService = require('./midService')

app.use(midService('Gabriel'))

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})


app.get('/opa', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 10, name: 'Marcela', position: 2},
            {id: 20, name: 'Tayene', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200    
    })

    next()

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 2000.00,
    //     discount: 0.12
    // })
    // res.json('Estou bem!')
})

app.use('/opa', (req, res, next) => {
    console.log('Depois')
    next()
})

app.listen(3000, () => {
    console.log('Backend executando...')
})