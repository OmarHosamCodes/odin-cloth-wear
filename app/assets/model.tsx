// Interface for social object (assuming you want specific types for social properties)
export class Social {
  readonly name: string;
  readonly url: string;
  readonly icon: string;

  constructor(name: string, url: string, icon: string) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }

  static socials: Social[] = [
    new Social(
      "Facebook",
      "https://www.facebook.com/odin.cloth.eg/",
      "https://img.icons8.com/windows/32/facebook.png"
    ),
    new Social(
      "Instagram",
      "https://www.instagram.com/odin_wear.eg/",
      "https://img.icons8.com/windows/32/instagram-new.png"
    ),
    new Social(
      "Tiktok",
      "https://www.tiktok.com/@odin_wear.eg/",
      "https://img.icons8.com/windows/32/tiktok.png"
    ),
  ];
}

export class Assets {
  // Use readonly for final properties to prevent accidental modification
  readonly logo: string;

  readonly categories: any[]; // Assuming you don't have a specific type for categories yet
  readonly coupons: any[]; // Assuming you don't have a specific type for coupons yet
  readonly order: number;

  // Static keyword for constants
  static readonly logoKey = "logo";

  static readonly categoriesKey = "categories";
  static readonly couponsKey = "coupons";
  static readonly orderKey = "order";

  constructor(
    logo: string,

    categories: any[],
    coupons: any[],
    order: number
  ) {
    this.logo = logo;

    this.categories = categories;
    this.coupons = coupons;
    this.order = order;
  }

  // Factory method to create from JSON
  static fromJson(json: any): Assets {
    return new Assets(
      json[Assets.logoKey] as string,

      json[Assets.categoriesKey] as any[],
      json[Assets.couponsKey] as any[],
      json[Assets.orderKey] as number
    );
  }

  // Empty constructor (optional, consider using a dedicated builder pattern for complex objects)
  static empty(): Assets {
    return new Assets("", [], [], 0);
  }

  // Method to convert to JSON
  toJson(): any {
    return {
      [Assets.logoKey]: this.logo,
      [Assets.categoriesKey]: this.categories,
      [Assets.couponsKey]: this.coupons,
      [Assets.orderKey]: this.order,
    };
  }

  // Copy method with optional parameters
  copyWith({
    logo,

    categories,
    coupons,
    order,
  }: Partial<Assets>): Assets {
    return new Assets(
      logo ?? this.logo,

      categories ?? this.categories,
      coupons ?? this.coupons,
      order ?? this.order
    );
  }
}
