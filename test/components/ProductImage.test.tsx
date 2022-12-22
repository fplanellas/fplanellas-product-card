import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen ', () => {
    const wrapper = renderer.create(<ProductImage img="img" />);
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <img
        alt="Product img"
        className="productImg undefined"
        src="img"
      />
    `);
  });

  test('debe mostar el componente con la imagen del producto ', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchInlineSnapshot(`
      <div
        className="productCard undefined 0"
      >
        <img
          alt="Product img"
          className="productImg undefined"
          src="./coffe-mug.png"
        />
      </div>
    `);
  });
});
