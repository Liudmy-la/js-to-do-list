// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
// const test = require('./test')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
// router.use('/', test)
// Використовуйте інші файли роутів, якщо є

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    title: 'To-Do List',
  })
})

// Експортуємо глобальний роутер
module.exports = router
