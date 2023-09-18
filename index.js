const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

const { id, product, delivery } = order;

document.body.innerHTML =
  `<h2>Objednávka: ${String(id).padStart(8, '0')}</h2>` +
  `<p>Zboží ${product} bude doručeno ${delivery}.</p>`;
