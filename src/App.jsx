import { useState, useEffect } from 'react';
import './App.css'
import NewForm from './components/NewForm'
import { createClient } from '@supabase/supabase-js';
import RestaurantCard from './components/RestaurantCard';

const supabase = createClient("https://vbjvlbaapwbzhpmjtnkr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianZsYmFhcHdiemhwbWp0bmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTcwMjcsImV4cCI6MjAyNjMzMzAyN30.MnNuDljYgITjt5m35rgIq2Qi81RyBroSzUZkwAl8jSA");

function App() {
  const [restaurants, setRestaurants] = useState([])

  async function getRestaurants() {
    const { data } = await supabase.from("restaurants").select();
    setRestaurants(data)

  }

  useEffect(() => {
    getRestaurants();
  }, [])



  return (
    <div>{

      restaurants.map(restaurant => {
        return (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            photoUrl={restaurant.photoUrl}
            specialty={restaurant.specialty}
            categories={restaurant.categories}
          />
        )
      })
    }</div>
  )

}

export default App
