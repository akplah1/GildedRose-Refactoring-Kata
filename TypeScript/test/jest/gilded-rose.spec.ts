import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Mon test', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras', 0, 0), new Item('Backstage passes', 30, 5), new Item('Aged Brie', 9, 10), 
    new Item('Backstage passes', 10, 10), new Item('Backstage passes', 5, 10), new Item('Backstage passes', -1, 10),
    new Item('Conjured', 9, 10), new Item('Conjured', -1, 10), new Item('Normal', 9, 10), new Item('Normal', -1, 10)]);
    
    const items = gildedRose.updateQuality();
    
    expect(items).toStrictEqual([new Item('Sulfuras', 0, 80), new Item('Backstage passes', 29, 6), new Item('Aged Brie', 8, 11), 
    new Item('Backstage passes', 9, 12), new Item('Backstage passes', 4, 13), new Item('Backstage passes', -2, 0),
    new Item('Conjured', 8, 8), new Item('Conjured', -2, 6), new Item('Normal', 8, 9), new Item('Normal', -2, 8)]);
  });
});
