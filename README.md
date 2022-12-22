# Fplanellas-Product-Card

Paquete de pruebas de despliegue en NPM

### Francisco Planellas

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fplanellas-product-card';
```

```
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
    {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```
