
"use client";
import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
export default function ProductsPage() {
    const [products, setproducts] = useState([]);
    const [loading, setload] = useState(true)
    useEffect(() => {
        getProducts()
            .then((data) => setproducts(data))
            .catch((error) => console.error(error))
            .finally(() => setload(false))

    }, []);
    return (
        <div>
            <h1>Products</h1>

            {loading ? (
                <h2>
                    <div class="spinner-border fg-primary" role="status">
                        <span class="visually-hidden">Loading…</span>
                    </div>
                    <div class="spinner-grow fg-accent" role="status">
                        <span class="visually-hidden">Loading…</span>
                    </div>
                </h2>
            ) : (
                products.map((p) => (
                    <div key={p.id}>
                        <h3>{p.title}</h3>
                        <p>${p.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}