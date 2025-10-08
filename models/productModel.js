// models/productStore.js
const { v4: uuidv4 } = require('uuid');

//  Create a new product
function createProduct(data) {
  const newProduct = { id: uuidv4(), ...data };
  products.push(newProduct);
  return newProduct;
}

// Get all products
function getAllProducts() {
  return products;
}

//  Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

//  Update product
function updateProduct(id, data) {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  return products[index];
}

//  Delete product
function deleteProduct(id) {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  const deleted = products.splice(index, 1);
  return deleted[0];
}

//  Count by category
function countByCategory() {
  return products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
}

//  Search by name
function searchByName(query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

//  Filter + Pagination
function filterAndPaginate({ category, page = 1, limit = 10 }) {
  let filtered = category
    ? products.filter(p => p.category === category)
    : [...products];

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return {
    total: filtered.length,
    page,
    limit,
    results: paginated,
  };
}

module.exports = {
  products,
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  countByCategory,
  searchByName,
  filterAndPaginate,
};