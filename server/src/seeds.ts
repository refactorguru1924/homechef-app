import { Category, Supplier, Product, Voucher, Comment } from './models/index.js'

// Seed data for Categories
export const categorySeedData = [
    new Category(1, "Vegetables", "Fresh organic vegetables", "🥬"),
    new Category(2, "Fruits", "Seasonal fresh fruits", "🍎"),
    new Category(3, "Dairy", "Fresh dairy products", "🥛"),
    new Category(4, "Meat", "Premium quality meat", "🥩"),
    new Category(5, "Seafood", "Fresh seafood and fish", "🐟"),
    new Category(6, "Grains", "Rice, wheat and other grains", "🌾"),
    new Category(7, "Spices", "Aromatic spices and herbs", "🌶️"),
    new Category(8, "Beverages", "Fresh juices and drinks", "🥤")
]

// Seed data for Suppliers
export const supplierSeedData = [
    new Supplier(1, "Fresh Farm Co", "123 Farm Road, Agriculture Valley", "contact@freshfarm.com", "+1-555-0101"),
    new Supplier(2, "Ocean Harvest", "456 Coastal Drive, Seaside Town", "info@oceanharvest.com", "+1-555-0102"),
    new Supplier(3, "Green Valley Organics", "789 Organic Lane, Green Hills", "sales@greenvalley.com", "+1-555-0103"),
    new Supplier(4, "Mountain Dairy", "321 Alpine Road, Mountain View", "orders@mountaindairy.com", "+1-555-0104"),
    new Supplier(5, "Spice Garden", "654 Herb Street, Flavor Town", "hello@spicegarden.com", "+1-555-0105")
]

// Seed data for Products
export const productSeedData = [
    new Product(1, "Organic Tomatoes", "Fresh Farm Co", "Vegetables", 4.99, 100, 25, 0, 0.1, ["tomato1.jpg", "tomato2.jpg"], "Fresh organic tomatoes, perfect for salads and cooking", "4.5", 45, 1, 12),
    new Product(2, "Red Apples", "Fresh Farm Co", "Fruits", 3.49, 150, 40, 0, 0, ["apple1.jpg", "apple2.jpg"], "Crisp and sweet red apples", "4.2", 32, 1, 8),
    new Product(3, "Whole Milk", "Mountain Dairy", "Dairy", 2.99, 80, 20, 0, 0, ["milk1.jpg"], "Fresh whole milk from grass-fed cows", "4.8", 60, 4, 15),
    new Product(4, "Atlantic Salmon", "Ocean Harvest", "Seafood", 15.99, 30, 8, 0, 0.15, ["salmon1.jpg", "salmon2.jpg"], "Wild-caught Atlantic salmon fillets", "4.7", 28, 2, 6),
    new Product(5, "Greek Yogurt", "Mountain Dairy", "Dairy", 5.49, 60, 15, 0, 0, ["yogurt1.jpg"], "Creamy Greek yogurt with probiotics", "4.6", 38, 4, 10),
    new Product(6, "Organic Spinach", "Green Valley Organics", "Vegetables", 3.99, 120, 30, 0, 0, ["spinach1.jpg"], "Fresh organic spinach leaves", "4.4", 22, 3, 5),
    new Product(7, "Premium Beef Steak", "Fresh Farm Co", "Meat", 24.99, 25, 5, 0, 0, ["beef1.jpg", "beef2.jpg"], "Premium quality beef steak cuts", "4.9", 18, 1, 4),
    new Product(8, "Jasmine Rice", "Green Valley Organics", "Grains", 8.99, 200, 50, 0, 0.05, ["rice1.jpg"], "Fragrant jasmine rice, 5kg bag", "4.3", 65, 3, 12),
    new Product(9, "Organic Turmeric", "Spice Garden", "Spices", 12.99, 50, 12, 0, 0, ["turmeric1.jpg"], "Premium organic turmeric powder", "4.8", 25, 5, 3),
    new Product(10, "Fresh Orange Juice", "Fresh Farm Co", "Beverages", 6.99, 40, 10, 0, 0, ["orange_juice1.jpg"], "Freshly squeezed orange juice, 1L", "4.5", 30, 1, 7)
]

// Seed data for Vouchers
export const voucherSeedData = [
    new Voucher("WELCOME10", "Welcome Discount", 0.10, "2024-12-31", "10% off for new customers"),
    new Voucher("SAVE20", "Big Save", 0.20, "2024-11-30", "20% off on orders over $50"),
    new Voucher("ORGANIC15", "Organic Special", 0.15, "2024-10-31", "15% off on organic products"),
    new Voucher("SEAFOOD25", "Seafood Delight", 0.25, "2024-09-30", "25% off on all seafood items"),
    new Voucher("DAIRY5", "Dairy Fresh", 0.05, "2025-01-31", "5% off on dairy products")
]

// Seed data for Comments
export const commentSeedData = [
    new Comment(1, 1, "avatar1.jpg", "John", "Doe", 1, "Amazing quality tomatoes! Very fresh and tasty.", 5, "2024-08-01"),
    new Comment(2, 2, "avatar2.jpg", "Jane", "Smith", 1, "Good tomatoes but could be fresher.", 4, "2024-08-02"),
    new Comment(3, 1, "avatar1.jpg", "John", "Doe", 2, "Best apples I've ever tasted!", 5, "2024-08-03"),
    new Comment(4, 3, "avatar3.jpg", "Mike", "Johnson", 3, "Great milk, my kids love it.", 5, "2024-08-04"),
    new Comment(5, 4, "avatar4.jpg", "Sarah", "Wilson", 4, "Perfect salmon for dinner party.", 5, "2024-08-05"),
    new Comment(6, 2, "avatar2.jpg", "Jane", "Smith", 5, "Creamy and delicious yogurt.", 4, "2024-08-06"),
    new Comment(7, 5, "avatar5.jpg", "David", "Brown", 6, "Fresh spinach, great for salads.", 4, "2024-08-07"),
    new Comment(8, 1, "avatar1.jpg", "John", "Doe", 7, "Excellent quality beef, very tender.", 5, "2024-08-08"),
    new Comment(9, 3, "avatar3.jpg", "Mike", "Johnson", 8, "Good rice, cooks well.", 4, "2024-08-09"),
    new Comment(10, 4, "avatar4.jpg", "Sarah", "Wilson", 9, "High quality turmeric, very aromatic.", 5, "2024-08-10")
]