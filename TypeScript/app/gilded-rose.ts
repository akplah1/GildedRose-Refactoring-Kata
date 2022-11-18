export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras'){
        this.items[i].quality = 80 //Pour le Sulfura, la qualité reste égale à 80
      }
      else {
        this.items[i].sellIn -= 1 //On soustrait 1 afin de prendre en compte la fin de la journée 

        if (this.items[i].name == 'Backstage passes' || this.items[i].name == 'Aged Brie') {
          // Ces 2 produits augmentent en qualité avec le temps 
          this.items[i].quality = (this.items[i].quality + 1 > 49) ? 50 : (this.items[i].quality + 1)
          
          //Le produit Backstage augmente d'avantage en qualité selon les critères
          if (this.items[i].name == 'Backstage passes'){
            
            // Après le concert, il ne reste plus de jours. la qualité passe à 0
            if (this.items[i].sellIn < 0){
              this.items[i].quality = 0 
            }
            // S'il reste 5 jours ou moins, la qualité augmente de 3. J'ajoute ici 2 car j'avais déja ajouté 1 sur la ligne 30
            else if (this.items[i].sellIn <= 5){
              this.items[i].quality = (this.items[i].quality + 2 > 49) ? 50 : (this.items[i].quality + 2)
            }
            // S'il reste 10 jours ou moins, la qualité augmente de 2. J'ajoute ici 1 car j'avais déja ajouté 1 sur la ligne 30
            else if (this.items[i].sellIn <= 10){
              this.items[i].quality = (this.items[i].quality + 1 > 49) ? 50 : (this.items[i].quality + 1)
            }
          }
        }

        //Après la péremption, la qualité se dégrade 2 fois plus vite. Donc pour Conjured, ce sera 4 fois plus vite. 
        else if(this.items[i].sellIn < 0){
          switch (this.items[i].name) {
            case 'Conjured': this.items[i].quality = (this.items[i].quality - 4 < 0) ? 0 : (this.items[i].quality - 4)
              break;
            default: this.items[i].quality = (this.items[i].quality - 2 < 0) ? 0 : (this.items[i].quality - 2)
              break;
          }
        }
        //La qualité des produits normaux se dégrade par jour. Pour Conjured, ça va 2 fois plus vite. 
        else {
          switch (this.items[i].name) {
            case 'Conjured': this.items[i].quality = (this.items[i].quality - 2 < 0) ? 0 : (this.items[i].quality - 2)
              break;
            default: this.items[i].quality = (this.items[i].quality - 1 < 0) ? 0 : (this.items[i].quality - 1)
              break;
          }
        }
      }
    }

    return this.items;
  }
}
