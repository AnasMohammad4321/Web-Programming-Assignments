const searchBtn = document.querySelector('.search button');
searchBtn.addEventListener('click', handleSearch);

function handleSearch() {
  const searchInput = document.querySelector('.search input');
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery === '') {
    alert('Please enter a search query.');
    return;
  }

  console.log(`Searching for "${searchQuery}"...`);

  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    const description = product.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchQuery) || description.includes(searchQuery)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}