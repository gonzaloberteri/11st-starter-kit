const categories = require('./categories');
const getItemsByCategory = require('./getItemsByCategory');

module.exports = async () => {
  const items = [];

  for (const category of categories) {
    await getItemsByCategory(category.code).then((r) => items.push(...r));
  }

  return items;
};
