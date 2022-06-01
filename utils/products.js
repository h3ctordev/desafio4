module.exports = class Products {
  constructor(products) {
    this.products = [...products];
  }

  save(object) {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;

    const objToSave = {
      id,
      ...object,
      price: +object.price,
    };

    this.products.push(objToSave);
    return objToSave;
  }
  update(id, product) {
    const { title, price, thumbnail } = product;
    const updateProduct = this.products.find((p) => +p.id === +id);
    if (!updateProduct) return { error: "producto no encontrado" };
    if (title) updateProduct.title = title;
    if (price) updateProduct.price = +price;
    if (thumbnail) updateProduct.thumbnail = thumbnail;
    this.products = this.products.map((p) =>
      +p.id === +id ? { ...updateProduct } : { ...p }
    );
    return null;
  }
  getById(id) {
    return this.products.find((o) => +o.id === +id) || null;
  }
  getAll() {
    return this.products;
  }
  delete(id) {
    if (!this.products.find((p) => +p.id === +id))
      return { error: "producto no encontrado" };
    this.products = this.products.filter((o) => +o.id !== +id);
    return null;
  }
};
