import { Injectable } from '@nestjs/common';
import { ShopItem, shopItems } from './data/shop-items';

@Injectable()
export class ShopItemService {

    constructor() {

    }

    async getShopItems(): Promise<ShopItem[]> {
        return shopItems;
    }

    async getItemById(itemId: string): Promise<ShopItem> {
        return shopItems.find((item) => item.id === itemId)
    }

    async searchItemByTitle(title: string): Promise<ShopItem[]> {
        const lowercaseTitle = title.toLowerCase();
        return shopItems.filter((item) => item.title.toLowerCase() === lowercaseTitle);
    }

    async getItemsByCategory(category: string): Promise<ShopItem[]> {
        return shopItems.filter((item) => item.category === category);
    }

    async filterItemsByCategoryAndPrice(category:string,minPrice:number,maxPrice:number){
        return shopItems.filter((product) => {
            const isCategoryMatch = product.category.includes(category)
            const isPriceMatch =
              (minPrice === null || product.price >= minPrice) &&
              (maxPrice === null || product.price <= maxPrice);
        
            return isCategoryMatch && isPriceMatch;
          });
    }

}
