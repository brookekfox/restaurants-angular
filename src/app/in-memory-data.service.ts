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
      },
      {
        id: 4,
        name: "Boo's Cheesesteak",
        price: 1,
        ranking: 0,
        attributes: ["good for Mike's family"],
        notes: "Brooke doesn't like it",
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 5,
        name: 'Burger Lounge',
        price: 1,
        ranking: 0,
        attributes: ["good for Mike's family", "good for Brooke's family"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 6,
        name: 'The Melt',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 7,
        name: 'The Waffle',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 8,
        name: 'Carving Board',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 9,
        name: 'Greenleaf',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 10,
        name: 'Sweetgreen',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 11,
        name: 'Delancey',
        price: 2,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 12,
        name: 'The Bowery',
        price: 2,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 13,
        name: 'Lemonade',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 14,
        name: 'Sushi Stop',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 15,
        name: "Bird's",
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 16,
        name: 'Franklin and Co',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 17,
        name: 'Blue C Sushi',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 18,
        name: 'California Chicken Cafe',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: 'the greatest ever',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 19,
        name: 'Division 3',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 20,
        name: 'Cactus Tacos',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 21,
        name: 'Palms Thai',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 22,
        name: 'Mendocino Farms',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 23,
        name: 'Genghis Cohen',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 24,
        name: "Jon & Vinny's",
        price: 3,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 25,
        name: 'Flame Broiler',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 26,
        name: "Bludsoe's BBQ",
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 27,
        name: 'Pizzeria Mozza',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 28,
        name: 'Komodo',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 29,
        name: 'Tamarind Street Deli',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 30,
        name: 'Larchmont Wine and Cheese',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 31,
        name: 'Pizza Romana',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 32,
        name: 'Shake Shack',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 33,
        name: 'In n Out',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 34,
        name: 'Chick-Fil-a',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 35,
        name: 'Fat Dog',
        price: 2,
        ranking: 0,
        attributes: ['brunch'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 36,
        name: 'Grub',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 37,
        name: 'Village Pizzeria',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 38,
        name: "Joan's on Third",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 39,
        name: "King's Road Cafe",
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 40,
        name: 'Angelini Osteria',
        price: 3,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 41,
        name: 'Bay Cities',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 42,
        name: 'Sack',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 43,
        name: 'Esquela Taqueria',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 44,
        name: 'Twin Sliders',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 45,
        name: 'El Coyote',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 46,
        name: 'Tender Greens',
        price: 1,
        ranking: 0,
        attributes: ['walkable'],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 47,
        name: 'Plan Check',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 48,
        name: "Farmer's Belly",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 49,
        name: 'Fritzi Chicken',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 50,
        name: 'Ludo Bird',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 51,
        name: "Barney's Beanery",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 52,
        name: 'Pitfire Pizza',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 53,
        name: 'Roku',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 54,
        name: "Sharky's",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 55,
        name: "Smoke's Poutinery",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: "Brooke doesn't like it",
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 56,
        name: 'Umami Burger',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 57,
        name: 'Which Wich',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 58,
        name: 'Pimai Thai',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 59,
        name: 'Prime Cutts',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 60,
        name: "Dave's Hot Chicken",
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 61,
        name: 'Love Baked Wings',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 62,
        name: 'Luv 2 Eat Thai',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 63,
        name: 'Fat Dragon',
        price: 2,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 64,
        name: 'Guisados',
        price: 1,
        ranking: 0,
        attributes: [''],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 65,
        name: 'Kula Revolving Sushi',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 66,
        name: 'Pine and Crane',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 67,
        name: 'Cosa Buona',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 68,
        name: 'Mh Zh',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 69,
        name: "Howling Ray's",
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 70,
        name: 'Sweet Chick',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 71,
        name: "Roscoe's Chicken and Waffles",
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 72,
        name: 'Gracias Madre',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 73,
        name: 'Jitlada',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 74,
        name: 'Forma',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 75,
        name: 'Sapp Coffee Shop',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 76,
        name: 'Aburiya Raku',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 77,
        name: 'The Corner Place',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 78,
        name: "Crawford's",
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 79,
        name: 'Sonoratown',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 80,
        name: 'Paramount Coffee Project',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 81,
        name: 'Messhall',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 82,
        name: 'Hyperion Public',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 83,
        name: "Connie & Ted's",
        price: 2,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 84,
        name: 'La Loteria',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: "in Grove Farmer's Market",
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 85,
        name: 'Petit Trois',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 86,
        name: 'Son of a Gun',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 87,
        name: 'Commisary (Line Hotel)',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 88,
        name: 'Pot',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 89,
        name: 'Villa Moreliana',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 90,
        name: 'Belcampo',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 91,
        name: "McConnell's",
        price: 1,
        ranking: 0,
        attributes: ["dessert"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 92,
        name: "Magpie's",
        price: 1,
        ranking: 0,
        attributes: ["dessert"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 93,
        name: "Jeni's",
        price: 1,
        ranking: 0,
        attributes: ["dessert"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 94,
        name: 'Milk',
        price: 1,
        ranking: 0,
        attributes: ["dessert"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 95,
        name: 'Coolhaus',
        price: 1,
        ranking: 0,
        attributes: ["dessert"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 96,
        name: 'Guerrila Tacos',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 97,
        name: "Doomie's",
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 98,
        name: 'Square One Dining',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 99,
        name: 'Donut Friend',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 100,
        name: "Trejo's Donuts",
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 101,
        name: 'Delphine',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 102,
        name: 'The Ponte',
        price: 2,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 103,
        name: 'Sqirl',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 104,
        name: "Breakfast by Salt's Cure",
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 105,
        name: "Salt's Cure",
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 106,
        name: 'Night + Market',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 107,
        name: 'Bossa Nova',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 108,
        name: 'Prova Pizza',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 109,
        name: '8 oz. Poke',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 110,
        name: 'Sweetfin Poke',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 111,
        name: '25 Degrees',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 112,
        name: 'The Hungry Cat',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 113,
        name: 'Black Market Tavern',
        price: 2,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 114,
        name: 'AOC',
        price: 3,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 115,
        name: 'Jar',
        price: 3,
        ranking: 0,
        attributes: [""],
        notes: 'Sunday fried chicken dinner',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 116,
        name: 'Maude',
        price: 3,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 117,
        name: 'Gwen',
        price: 3,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: 'seasonal tasting menu, requires reservations far in advance',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 118,
        name: 'n/naka',
        price: 4,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: 'reservations open 10AM Sundays, $200 tasting menu',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 119,
        name: 'Sushi Ike',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 120,
        name: 'La Numero Uno',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 121,
        name: 'Blu Jam',
        price: 2,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: 'line always long',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 122,
        name: "Pink's",
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: 'line always long',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 123,
        name: 'Trois Familia',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 124,
        name: 'Button Mash',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 125,
        name: 'BS Taqueria',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 126,
        name: "Cassell's Hamburgers",
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 127,
        name: 'Border Grill',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 128,
        name: 'Market Provisions',
        price: 2,
        ranking: 0,
        attributes: ["brunch"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 129,
        name: 'Alimento',
        price: 3,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 130,
        name: 'Playa Provisions',
        price: 1,
        ranking: 0,
        attributes: [""],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 131,
        name: 'Love & Salt',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      },
      {
        id: 132,
        name: 'M.B. Post',
        price: 1,
        ranking: 0,
        attributes: ["haven't tried yet"],
        notes: '',
        atmosphere: '&#9786;',
        isSelected: false
      }
    ];
    return {restaurants};
  }
}