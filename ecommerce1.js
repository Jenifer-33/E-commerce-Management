const products = [
    {
        productId: "1a",
         name: "laptop",
        description: "hp laptop",
        price: 20000,
        stock: 50,
          category: "electronics",
        tags: ["student laptop", "office laptop", "system"],
        discount: {
       type: "percentage",
           value: 10
        }
    },
    {
     productId: "1b",
     name: "tv",
     description: "samsung tv",
     price: 30000,
      stock: 40,
    category: "electronics",
     tags: ["samsung", "tv", "electronics"],
        discount: {
            type: "percentage",
            value: 15
        }
    },
    {
        productId: "1c",
          name: "watch",
        description: "joker and witch",
         price: 1000,
       stock: 60,
        category: "watch",
         tags: ["watch", "branded watch", "unisex watch"],
        discount: {
            type: "percentage",
            value: 5
        }
    },
    {
         productId: "1d",
        name: "shoe",
        description: "puma shoe",
         price: 5000,
       stock: 60,
        category: "footwear",
         tags: ["shoes", "branded shoe", "unisex footwear"],
        discount: {
             type: "percentage",
            value: 5
        }
    },                                                                           
];

// Displaying all products
console.log("***ALL PRODUCTS:***");
const displayProductDetails = () => {
    for (const product of products) {
        console.log(
            `ID: ${product.productId}`,
           ` Name: ${product.name}`,
            `Description:${product.description}`,
           ` Price: ${product.price}`,
            ` Stock: ${product.stock}`,
            `Category: ${product.category}`,
            `Tags: ${product.tags.join(",")}`
            
        );
        for(const key in product.discount){
            console.log(`discount:${product.discount[key]}`)
        }
    }
    
};
displayProductDetails();

// Filtering products by category
const filtered = products.filter(item => item.category === 'electronics');
console.log("***Filtered:", filtered);

// Finding one product by ID
const found = products.find(item => item.productId === '1c');
console.log("***Found Product:", found);

// Applying discount
const finalprice = (() => {                                                   
    const applyDiscount = (product, discount) => {
        if (discount && discount.type === 'percentage') {
            product.price -= (product.price*discountcount.value) / 100;
        } else if (discount && discount.type === 'fixed') {
             product.price -= discount.value;                                           
        }
    };
    return {
        applyDiscount
    };
})();

// Update stock
const ustock = products.find(item => item.productId === '1b');
if (ustock) {
    console.log(`Stock update of ${ustock.productId} is ${ustock.stock}`);
} else {
    console.log(`No product with ID '1b' found`);
}

const findProductById = (pid) => {
    return products.find(item => item.productId === pid);
};

// Add tag to product
const addTagtoProduct = (productId, tag) => {
    const product = findProductById(productId);
    if (product) {
        if (!product.tags.includes(tag)) {
            product.tags.push(tag);
            console.log(`Tag '${tag}' added to product ID '${productId}'`);
        } 
    } else {
        console.log(`Product with ID '${productId}' not found`);
    }
};

console.log("***adding Tag to Product id '1c'");
          addTagtoProduct("1d", "casual wear");
           

// Remove product
const removeProduct = (productId) => {
    const index = products.findIndex(item => item.productId === productId);
    if (index !== -1) {
        products.splice(index, 1);
        console.log(`Product with ID '${productId}' removed`);
    } else {
        console.log(`Product with ID '${productId}' not found`);
    }
};

console.log(" ***Remove Product '1a':");
removeProduct('1a');
console.log("***After Removing Product:");
displayProductDetails();

// Calculate total value
const calculateTotalValue = () => {
    let totalValue = 0;
    for (const product of products) {
        totalValue += product.price * product.stock;
    }
    console.log(`Total Inventory Value: ${totalValue}`);
};

console.log("***TotalValue :");
calculateTotalValue();
