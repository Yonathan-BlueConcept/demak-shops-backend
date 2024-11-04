import { Controller, Get, Param } from '@nestjs/common';
import { ShopItemService } from './shop-item.service';

@Controller('shop-item/fun-shop')
export class ShopItemController {

    constructor(private readonly shopItemService: ShopItemService) { }

    @Get('/')
    async getShopItems() {
        return this.shopItemService.getShopItems();
    }

    @Get('/get-item/:id')
    async getItem(@Param("id") itemId: string) {
        return this.shopItemService.getItemById(itemId);
    }

    @Get('/search-item/:title')
    async searchItem(@Param("title") title: string) {
        return this.shopItemService.searchItemByTitle(title)
    }

    @Get('/category-filter/:category')
    async categoryFilter(@Param("category") category: string) {
        return this.shopItemService.getItemsByCategory(category)
    }

    @Get('/category-filter/:category/:minPrice/:maxPrice')
    async filterItemsByCategoryAndPrice(@Param("category") category: string, @Param("minPrice") minPrice: number, @Param("maxPrice") maxPrice: number) {
        return this.shopItemService.filterItemsByCategoryAndPrice(category, minPrice, maxPrice);
    }
}
