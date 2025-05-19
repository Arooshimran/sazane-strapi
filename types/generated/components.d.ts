import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductColor extends Struct.ComponentSchema {
  collectionName: 'components_product_product_colors';
  info: {
    displayName: 'ProductColor';
    icon: 'plus';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['Black', 'White', 'Red', 'Blue', 'Gray', 'Green']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product-color': ProductProductColor;
    }
  }
}
