import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { titulo: 'Lâmpadas', image: 'lampadas.svg' },
    { titulo: 'Pilhas e Baterias', image: 'baterias.svg' },
    { titulo: 'Papeis e Papelão', image: 'papeis-papelao.svg' },
    { titulo: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { titulo: 'Orgânicos', image: 'organicos.svg' },
    { titulo: 'Oléo', image: 'oleo.svg' }
  ]);
}