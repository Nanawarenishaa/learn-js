import './style.css';

console.log('Shopkeeper application started');


// ========================================
// GET PRODUCTS FROM API
// ========================================

const apiUrl = 'https://dummyjson.com/products?limit=50';

const fetchProducts = await fetch(apiUrl);

const response = await fetchProducts.json();

console.log(response.products);

const product = response.products;


// ========================================
// HTML ELEMENTS
// ========================================

const productTableBody =
    document.getElementById('productTableBody');


// ========================================
// UPDATE DASHBOARD CARDS
// ========================================

function updateDashboard() {

    // Total products

    const totalProducts = product.length;


    // Active products

    const activeProducts =
        product.filter(p => p.stock > 0).length;


    // Out of stock products

    const outStockProducts =
        product.filter(p => p.stock === 0).length;


    // Low stock products
    // Here we consider 1-10 items as low stock

    const lowStockProducts =
        product.filter(
            p => p.stock > 0 && p.stock <= 10
        ).length;


    // Put values into HTML

    const totalElement =
        document.getElementById('totalProducts');

    totalElement.textContent = totalProducts;


    const activeElement =
        document.getElementById('activeProducts');

    activeElement.textContent = activeProducts;


    const outStockElement =
        document.getElementById('outStockProducts');

    outStockElement.textContent = outStockProducts;


    const lowStockElement =
        document.getElementById('lowStock');

    lowStockElement.textContent = lowStockProducts;


    // Console

    console.log(`Total products: ${totalProducts}`);

    console.log(`Active products: ${activeProducts}`);

    console.log(`Out of stock products: ${outStockProducts}`);

    console.log(`Low stock products: ${lowStockProducts}`);
}


// ========================================
// DISPLAY PRODUCTS
// ========================================

function displayProducts(products) {

    productTableBody.innerHTML = products.map(p => `

        <tr class="border-b border-gray-100 hover:bg-gray-50">

            <!-- PRODUCT -->

            <td class="px-6 py-4">

                <div class="flex items-center gap-3">

                    <img
                        src="${p.thumbnail}"
                        class="w-12 h-12 rounded-lg object-cover"
                    >

                    <span class="font-bold text-gray-900">
                        ${p.title}
                    </span>

                </div>

            </td>


            <!-- CATEGORY -->

            <td class="px-6 py-4 text-gray-600">
                ${p.category}
            </td>


            <!-- PRICE -->

            <td class="px-6 py-4 font-bold">
                $${p.price}
            </td>


            <!-- STOCK -->

            <td class="px-6 py-4 font-bold">
                ${p.stock} items left
            </td>

        </tr>

    `).join('');
}


// ========================================
// INITIAL DISPLAY
// ========================================

// Show products when page loads

displayProducts(product);


// Show dashboard numbers

updateDashboard();


// ========================================
// SEARCH PRODUCTS
// ========================================

const searchInput =
    document.getElementById('searchInput');


searchInput.addEventListener('input', () => {

    // Get what user typed

    const searchTerm =
        searchInput.value.toLowerCase();


    // Filter products

    const searchProducts =
        product.filter(
            p => p.title
                .toLowerCase()
                .includes(searchTerm)
        );


    console.log(
        `Search products: ${
            searchProducts
                .map(p => p.title)
                .join(', ')
        }`
    );


    // Display filtered products

    displayProducts(searchProducts);

});


// ========================================
// ADD PRODUCT FORM
// ========================================

const productForm =
    document.getElementById('productForm');

const addProductBtn =
    document.getElementById('addProductBtn');


// ========================================
// OPEN ADD PRODUCT FORM
// ========================================

addProductBtn.addEventListener('click', () => {

    productForm.classList.remove('hidden');

    console.log('Add product button clicked');

});


// ========================================
// CLOSE ADD PRODUCT FORM
// ========================================

const closeFormBtn =
    document.getElementById('closeProductForm');


closeFormBtn.addEventListener('click', () => {

    productForm.classList.add('hidden');

});


// ========================================
// SAVE PRODUCT
// ========================================

const saveProductBtn =
    document.getElementById('saveProductBtn');


saveProductBtn.addEventListener('click', () => {


    // ========================================
    // GET FORM VALUES
    // ========================================

    const pName =
        document.getElementById('productName').value;

    const pImage =
        document.getElementById('productImage').files[0];

    const pPrice =
        document.getElementById('productPrice').value;

    const pCategory =
        document.getElementById('productCategory').value;

    const pStock =
        document.getElementById('productStock').value;


    // ========================================
    // VALIDATION
    // ========================================

    // We use === '' for stock because
    // 0 is a valid stock value.

    if (
        pName === '' ||
        !pImage ||
        pPrice === '' ||
        pCategory === '' ||
        pStock === ''
    ) {

        alert('Please fill all the fields');

        return;
    }


    // ========================================
    // CREATE IMAGE URL
    // ========================================

    const imageURL =
        URL.createObjectURL(pImage);


    // ========================================
    // CREATE NEW PRODUCT
    // ========================================

    const newProduct = {

        id: Date.now(),

        title: pName,

        thumbnail: imageURL,

        price: Number(pPrice),

        category: pCategory,

        stock: Number(pStock)

    };


    console.log('New product:', newProduct);


    // ========================================
    // ADD PRODUCT TO ARRAY
    // ========================================

    product.push(newProduct);


    console.log('Updated product array:', product);


    // ========================================
    // UPDATE TABLE
    // ========================================

    displayProducts(product);


    // ========================================
    // UPDATE DASHBOARD
    // ========================================

    updateDashboard();


    // ========================================
    // CLOSE FORM
    // ========================================

    productForm.classList.add('hidden');


    // ========================================
    // CLEAR FORM
    // ========================================

    document.getElementById('productName').value = '';

    document.getElementById('productImage').value = '';

    document.getElementById('productPrice').value = '';

    document.getElementById('productCategory').value = '';

    document.getElementById('productStock').value = '';


    console.log('Product added successfully');

});