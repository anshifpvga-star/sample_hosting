import { Suspense } from "react";
import { getProductById } from "../../services/productService";

async function ProductDetailsContent({ params }) {
    const { id } = await params;

    const product = await getProductById(id);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
        </div>
    );
}

export default function ProductDetails({ params }) {
    return (
        <Suspense fallback={<p>Loading product...</p>}>
            <ProductDetailsContent params={params} />
        </Suspense>
    );
}