import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Category, ProductEntity, Variation } from '../products/product.module';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";
import { CartService } from '../cart/cartService/cart.service';


@Component({
    selector: 'app-product-details',
    imports: [
    FormsModule,
    CommonModule,
    NavbarComponent,
    FooterComponent
],
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  tooltipVisible: string | null = null;
  originalProduct: ProductEntity| null = null
  variations: string[] = Object.values(Variation);
  categories: string[] = Object.keys(Category);
  selectedCategory: string = '';
  selectedVariation: string = ''; 
  price: number = 0;
  basePrice: number = 0;

  product: ProductEntity = {
    id: '',
    name: '',
    price: '0',
    scentDescription: '',
    image_url: '',
    categoryId: Category.DEFAULT,
    customerId: '',
    variation: Variation["15ml"],
    scentNotes: {
      Top: '',
      Middle: '',
      Base:''
    },
    otherCombinations: [],
    scentStory: []
  };

  products: string | null = localStorage.getItem("generated-product");
  formattedProduct: any = this.products ? JSON.parse(this.products) : null;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product = {
      ...this.formattedProduct,
      categoryId: Category.DEFAULT,
      variation: Variation["15ml"]
    };

    this.updateOtherCombinations();
    this.updateVariationImage();
    this.originalProduct = this.product
    this.product.id = this.formattedProduct.id
  }

  showTooltip(type: string): void {
    this.tooltipVisible = type;
  }

  hideTooltip(): void {
    this.tooltipVisible = null;
  }

  calculatePriceofPerfume(): number {
    const categoryBasePrices: Record<Category, number> = {
      [Category.IMPERIAL]: 17000,
      [Category.SUBLIME]: 15000,
      [Category.PRESTIGE]: 25000,
      [Category.DEFAULT]: 0,
    };
  
    const variationMultipliers: Record<Variation, number> = {
      "15ml": 1,
      "20ml": 1.1,
      "30ml": 2,
      "50ml": 2.5,
      "100ml": 3,
    
    };
    
    this.basePrice = categoryBasePrices[this.selectedCategory as Category] || 0;
    const multiplier = variationMultipliers[this.selectedVariation as Variation] || 1;

    this.price = this.basePrice * multiplier;

    this.updateOtherCombinations();
    this.updateVariationImage();

    this.product.price = this.price.toString()
  
    return this.price;
  }

  updateOtherCombinations(): void {
    switch (this.selectedCategory) {
      case Category.IMPERIAL:
        this.product.otherCombinations = ["Designer Remake 1", "Designer Remake 2"];
        break;
      case Category.SUBLIME:
        this.product.otherCombinations = ["Concentrated Oil 1", "Concentrated Oil 2"];
        break;
      case Category.PRESTIGE:
        this.product.otherCombinations = ["Blend 1", "Blend 2"];
        break;
      default:
        this.product.otherCombinations = [];
    }
    this.product.categoryId = this.selectedCategory as Category;
  }
  
  updateVariationImage(): void {
    const variationImages: Record<Variation, string> = {
      "15ml": "https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=800",

      "20ml": "https://images.pexels.com/photos/8450248/pexels-photo-8450248.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      "30ml": "https://i.etsystatic.com/22431112/r/il/a944da/3624122705/il_570xN.3624122705_q7sg.jpg",
      "50ml": "https://images.pexels.com/photos/8709582/pexels-photo-8709582.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      "100ml": "https://media.istockphoto.com/id/1145852142/photo/cosmetic-spray-bottle-on-white.jpg?s=2048x2048&w=is&k=20&c=yQza0Ggi7Fm2ff14FLclddyWUCvgq5zbeRb_Fo8IntM=",
    };
    this.product.image_url = variationImages[this.selectedVariation as Variation] || "https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
    this.product.variation = this.selectedVariation as Variation;
  }

  switchToCombination(combination: any): void {
    if (this.originalProduct && this.product.name === combination.name) {
      // Switch back to the original product
      this.product = { ...this.originalProduct };
    } else {
      // Switch to the selected combination
      this.product = {
        ...this.product, // Keep other properties intact
        name: combination.name,
        scentDescription: combination.description || '',
        image_url: combination.image_url || this.product.image_url,
        scentNotes: combination.scentNotes || [],
        otherCombinations: combination.otherCombinations || [],
      };
      console.log("Switched to combination:", this.product);
    }
  }
  
  addToCart(): void {
    this.cartService.addToCartWithUpdate(this.product);
  }

  
  
  
}
