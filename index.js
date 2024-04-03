const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const elementCategory = document.createElement("div");
        // Set the text content of the category element to the category name
        elementCategory.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(elementCategory);

        // Create an element to represent a list of items
        const listOfItems = document.createElement("ul");
        // Append a list of items element to the menu container
        menuContainer.appendChild(listOfItems);

        // Loop through the items in the category and create list items
        for (const item of menu[category]) {
            // Create a list item element
            const listItemElement = document.createElement("li");
            // Set the text content of the list item element to the item name
            listItemElement.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener("click", function () {
                addToOrder(item);
            });
            // Append the list item to the list of items
            listOfItems.appendChild(listItemElement);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    // Create a list item for the order
    const listItem = document.createElement("li");
    // Set the text content of the list item to the item name
    listItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);
    // Calculate and update the total price
    const totalPrice = orderItemsList.children.length;
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
};

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
