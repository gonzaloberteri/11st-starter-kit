const categories = require('./categories');
const getItemsByCategory = require('./getItemsByCategory');

module.exports = async () => {
  const result = [];

  for (const category of categories) {
    await getItemsByCategory(category.code).then((r) =>
      result.push({ category, items: r }),
    );
  }

  return result;
};
