"use client"
import React, { useState } from 'react';

const AddFoodForm = () => {
  const [food, setFood] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(food), 
    });

    const data = await res.json(); 
    if (res.ok) {
      alert('Food added successfully!');
      setFood({ name: '', description: '', price: '', image: '' });
    } else {
      alert(data.error || 'Failed to add food');
    }
  } catch (err) {
    console.error(err);
    alert('Error adding food');
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Food</h2>

      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={food.name}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1 mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={food.description}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1 mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Price:
        <input
          type="number"
          name="price"
          value={food.price}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1 mt-1"
          required
        />
      </label>

      <label className="block mb-4">
        Image URL:
        <input
          type="text"
          name="image"
          value={food.image}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1 mt-1"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Food
      </button>
    </form>
  );
};

export default AddFoodForm;
