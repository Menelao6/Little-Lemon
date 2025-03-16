import React from 'react';
import Image from 'next/image';
import styles from "./MenuList.module.css";

function MenuItem({ name, image, description, price }) {
    return (
        <div className={styles.MenuItem}>
            <Image
                className={styles.itemImage}
                src={`/${image}`}
                alt={name}
                width={200}
                height={150}
            />
            <h3 className={styles.itemTitle}>{name}</h3>
            <p className={styles.itemDescription}>{description}</p>
            <p className={styles.itemPrice}>${price}</p>
        </div>
    );
}

export default function MenuList() {
    const menuList = [
        {
            name: "Cheeseburger",
            image: "cheeseburger.jpg",
            description: "A classic cheeseburger with lettuce, tomato, and onion.",
            price: 5.99,
        },
        {
            name: "Chicken Sandwich",
            image: "Chicken Sandwich.jpg",
            description: "A crispy chicken sandwich with lettuce, tomato, and mayo.",
            price: 6.99,
        },
        {
            name: "Fries",
            image: "Fries.jpg",
            description: "Crispy golden fries.",
            price: 2.99,
        },
        {
            name: "Milkshake",
            image: "Milkshake.jpg",
            description: "A creamy milkshake.",
            price: 3.99,
        },
        {
            name: "Salad",
            image: "greeksalad.jpg",
            description: "A fresh garden salad with your choice of dressing.",
            price: 4.99,
        },
        {name: "Beef Tacos",
        image: "Beef Tacos.jpg",
        description: "Three beef tacos with lettuce, cheese, and salsa.",
        price: 7.99,
        },
        {
            name: "Chicken Tacos",
            image: "Chicken Tacos.jpg",
            description: "Three chicken tacos with lettuce, cheese, and salsa.",
            price: 7.99,
        },
        {
            name: "Fish Tacos",
            image: "Fish Tacos.jpg",
            description: "Three fish tacos with lettuce, cheese, and salsa.",
            price: 8.99,
        },
        {
            name: "Veggie Tacos",
            image: "Veggie Tacos.jpg",
            description: "Three veggie tacos with lettuce, cheese, and salsa.",
            price: 6.99,
        }
    ];
    return (
        <div className={styles.menu}>
            <h1 className={styles.menuTitle}>Our Menu</h1>
            <div className={styles.menuItems}>
            {menuList.map((item) => (
                <MenuItem className={styles.menuItem}
                    key={item.name}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                />
            ))}
           </div>
        </div>
    );
}