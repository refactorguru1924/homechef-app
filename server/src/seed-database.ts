import database from './database/database.js'
import { categorySeedData, supplierSeedData, productSeedData, voucherSeedData } from './seeds.js'

// Create a mapping from category name to category ID
const categoryNameToId = new Map<string, number>()
categorySeedData.forEach(category => {
    categoryNameToId.set(category.categoryName, category.categoryID)
})

async function seedDatabase() {
    console.log('🌱 Starting database seeding...')
    
    try {
        // Seed Categories
        console.log('📂 Seeding categories...')
        for (const category of categorySeedData) {
            const query = `
                INSERT INTO categories (category_id, category_name, description, icon)
                VALUES (?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    category_name = VALUES(category_name),
                    description = VALUES(description),
                    icon = VALUES(icon)
            `
            await database.query(query, [
                category.categoryID,
                category.categoryName,
                category.description,
                category.icon
            ])
        }
        console.log('✅ Categories seeded successfully')

        // Seed Suppliers
        console.log('🏪 Seeding suppliers...')
        for (const supplier of supplierSeedData) {
            const query = `
                INSERT INTO suppliers (supplier_id, supplier_name, address, email, phone_number)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    supplier_name = VALUES(supplier_name),
                    address = VALUES(address),
                    email = VALUES(email),
                    phone_number = VALUES(phone_number)
            `
            await database.query(query, [
                supplier.supplierID,
                supplier.supplierName,
                supplier.address,
                supplier.email,
                supplier.phoneNumber
            ])
        }
        console.log('✅ Suppliers seeded successfully')

        // Seed Products
        console.log('📦 Seeding products...')
        for (const product of productSeedData) {
            const categoryId = categoryNameToId.get(product.category)
            if (!categoryId) {
                throw new Error(`Category not found: ${product.category}`)
            }
            
            const query = `
                INSERT INTO products (
                    product_id, product_name, supplier_id, category_id, price, quantity, 
                    sold_quantity, unit_in_order, discount, images, description
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    product_name = VALUES(product_name),
                    supplier_id = VALUES(supplier_id),
                    category_id = VALUES(category_id),
                    price = VALUES(price),
                    quantity = VALUES(quantity),
                    sold_quantity = VALUES(sold_quantity),
                    unit_in_order = VALUES(unit_in_order),
                    discount = VALUES(discount),
                    images = VALUES(images),
                    description = VALUES(description)
            `
            await database.query(query, [
                product.productID,
                product.productName,
                product.supplierID,
                categoryId,
                product.price,
                product.quantity,
                product.soldQuantity,
                product.unitInOrder,
                product.discount === 0 ? null : product.discount,
                JSON.stringify(product.images),
                product.description
            ])
        }
        console.log('✅ Products seeded successfully')

        // Seed Vouchers
        console.log('🎟️ Seeding vouchers...')
        for (const voucher of voucherSeedData) {
            const query = `
                INSERT INTO vouchers (voucher_id, voucher_name, voucher_discount, expiry_date, description)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    voucher_name = VALUES(voucher_name),
                    voucher_discount = VALUES(voucher_discount),
                    expiry_date = VALUES(expiry_date),
                    description = VALUES(description)
            `
            await database.query(query, [
                voucher.voucherID,
                voucher.voucherName,
                voucher.voucherDiscount,
                voucher.expiryDate,
                voucher.description
            ])
        }
        console.log('✅ Vouchers seeded successfully')

        // Seed Comments (commented out - requires users to exist first)
        // console.log('💬 Seeding comments...')
        // for (const comment of commentSeedData) {
        //     const query = `
        //         INSERT INTO comments (
        //             comment_id, user_id, product_id, comment, comment_date
        //         )
        //         VALUES (?, ?, ?, ?, ?)
        //         ON DUPLICATE KEY UPDATE
        //             comment = VALUES(comment),
        //             comment_date = VALUES(comment_date)
        //     `
        //     await database.query(query, [
        //         comment.commentID,
        //         comment.userID,
        //         comment.productID,
        //         comment.comment,
        //         comment.commentDate
        //     ])
        // }
        // console.log('✅ Comments seeded successfully')

        console.log('🎉 Database seeding completed successfully!')
        
    } catch (error: any) {
        console.error('❌ Error seeding database:', error.message)
        throw error
    } finally {
        await database.end()
        console.log('🔐 Database connection closed')
    }
}

// Run the seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    seedDatabase()
        .then(() => {
            console.log('✅ Seeding process completed')
            process.exit(0)
        })
        .catch((error) => {
            console.error('❌ Seeding process failed:', error)
            process.exit(1)
        })
}

export default seedDatabase