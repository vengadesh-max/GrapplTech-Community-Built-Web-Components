import React from 'react';
// import './Menu.css';

function Menu() {
  const dishes = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic cheese pizza with fresh mozzarella and basil.', price: '$10.99' },
    { id: 2, name: 'Spaghetti Carbonara', description: 'Spaghetti with pancetta, eggs, and Parmesan cheese.', price: '$12.99' },
    { id: 3, name: 'Caesar Salad', description: 'Crispy romaine lettuce with Caesar dressing and croutons.', price: '$8.99' },
    { id: 4, name: 'BBQ Chicken Wings', description: 'Juicy chicken wings tossed in tangy BBQ sauce.', price: '$11.99' },
    { id: 5, name: 'Penne Arrabbiata', description: 'Penne pasta in a spicy tomato sauce with garlic and red chili flakes.', price: '$13.49' },
    { id: 6, name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: '$6.99' },
    { id: 7, name: 'Marinara Pasta', description: 'Pasta in a rich tomato sauce with garlic and herbs.', price: '$11.49' },
    { id: 8, name: 'Greek Salad', description: 'A refreshing salad with olives, feta cheese, cucumbers, and tomatoes.', price: '$9.99' },
    { id: 9, name: 'Buffalo Chicken Pizza', description: 'Spicy buffalo chicken pizza with a drizzle of ranch dressing.', price: '$12.49' },
    { id: 10, name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust and strawberry topping.', price: '$7.49' },
    { id: 11, name: 'Garlic Bread', description: 'Crispy bread slices topped with garlic butter and herbs.', price: '$5.99' },
    { id: 12, name: 'Pesto Pasta', description: 'Pasta with a flavorful basil pesto sauce and Parmesan cheese.', price: '$12.99' },
  ];

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>{dish.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
