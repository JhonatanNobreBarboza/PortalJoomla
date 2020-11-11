'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjPostsSchema extends Schema {
  up () {
    this.create('proj_posts', (table) => {
      table.increments()
      table.string('titulo', 80).notNullable().unique()
      table.string('subtitulo', 254).notNullable().unique()
      table.string('conteudo', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proj_posts')
  }
}

module.exports = ProjPostsSchema
