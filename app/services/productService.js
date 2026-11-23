const API_URL = "https://fakestoreapi.com";
export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
      caches 
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}
export async function getProductById(id) {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    return response.json();
}