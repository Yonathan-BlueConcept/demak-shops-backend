import { Controller, Get, Param } from '@nestjs/common';
import { ShopItemService } from './shop-item.service';

@Controller('shop-item')
export class ShopItemController {

    constructor(private readonly shopItemService: ShopItemService) { }

    @Get('/fun-shop')
    async getShopItems() {
        return this.shopItemService.getShopItems();
    }

    @Get('/fun-shop/get-item/:id')
    async getItem(@Param("id") itemId: string) {
        return this.shopItemService.getItemById(itemId);
    }

    @Get('/fun-shop/search-item/:title')
    async searchItem(@Param("title") title: string) {
        return this.shopItemService.searchItemByTitle(title)
    }

    @Get('/fun-shop/category-filter/:category')
    async categoryFilter(@Param("category") category: string) {
        return this.shopItemService.getItemsByCategory(category)
    }

    @Get('/fun-shop/category-filter/:category/:minPrice/:maxPrice')
    async filterItemsByCategoryAndPrice(@Param("category") category: string, @Param("minPrice") minPrice: number, @Param("maxPrice") maxPrice: number) {
        return this.shopItemService.filterItemsByCategoryAndPrice(category, minPrice, maxPrice);
    }
}
