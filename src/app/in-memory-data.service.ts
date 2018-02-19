import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants = [
      {
        id: 1,
        name: 'Blue Bottle Coffee',
        price: 1,
        ranking: 1,
        attributes: ['coffee - good', 'parking - easy', 'breakfast'],
        notes: 'great coffee. really good egg sandwich.',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 2,
        name: 'Backyard Bowls',
        price: 1,
        ranking: 2,
        attributes: ['parking - easy', 'breakfast'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 3,
        name: 'Osteria Mozza',
        price: 3,
        ranking: 0,
        attributes: ['fancy'],
        notes: 'delicious. check out the bar menu.',
        atmosphere: '&#9786;',
        isSelected: false
      }
    ];
    return {restaurants};
  }
}