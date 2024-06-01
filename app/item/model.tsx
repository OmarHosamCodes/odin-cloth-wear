export type sizes = {
  size: string;
  isInStock: boolean;
};

class Item {
  id: string;
  name: string;
  description: string;
  images: any[];
  price: number;
  category: string;
  subCategory: string;
  colors: any[];
  sizes: sizes[];
  sizing: any[];
  tags: any[];
  constructor(
    id: string,
    name: string,
    description: string,
    images: any[],
    price: number,
    category: string,
    subCategory: string,
    colors: any[],
    sizes: sizes[],
    sizing: any[],
    tags: any[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.price = price;
    this.category = category;
    this.subCategory = subCategory;
    this.colors = colors;
    this.sizes = sizes;
    this.sizing = sizing;
    this.tags = tags;
  }

  static fromJson(json: any): Item {
    return new Item(
      json[Item.idKey],
      json[Item.nameKey],
      json[Item.descriptionKey],
      json[Item.imagesKey],
      json[Item.priceKey],
      json[Item.categoryKey],
      json[Item.subCategoryKey],
      json[Item.colorsKey],
      json[Item.sizesKey],
      json[Item.sizingKey],
      json[Item.tagsKey]
    );
  }

  copyWith({
    id,
    name,
    description,
    images,
    price,
    category,
    subCategory,
    colors,
    sizes,
    tags,
  }: Partial<Item>): Item {
    return new Item(
      id ?? this.id,
      name ?? this.name,
      description ?? this.description,
      images ?? this.images,
      price ?? this.price,
      category ?? this.category,
      subCategory ?? this.subCategory,
      colors ?? this.colors,
      sizes ?? this.sizes,
      this.sizing,
      tags ?? this.tags
    );
  }

  static readonly idKey = "id";
  static readonly nameKey = "name";
  static readonly descriptionKey = "description";
  static readonly imagesKey = "images";
  static readonly priceKey = "price";
  static readonly categoryKey = "category";
  static readonly subCategoryKey = "subCategory";
  static readonly colorsKey = "colors";
  static readonly sizesKey = "sizes";
  static readonly sizingKey = "sizing";
  static readonly tagsKey = "tags";

  toJson(): any {
    return {
      [Item.idKey]: this.id,
      [Item.nameKey]: this.name,
      [Item.descriptionKey]: this.description,
      [Item.imagesKey]: this.images,
      [Item.priceKey]: this.price,
      [Item.categoryKey]: this.category,
      [Item.subCategoryKey]: this.subCategory,
      [Item.colorsKey]: this.colors,
      [Item.sizesKey]: this.sizes,
      [Item.sizingKey]: this.sizing,
      [Item.tagsKey]: this.tags,
    };
  }

  static empty(): Item {
    return new Item("", "", "", [], 0, "", "", [], [], [], []);
  }

  static filterItemsByCategory(items: Item[], category: string): Item[] {
    return items.filter((item) => item.category === category);
  }
}

export default Item;
