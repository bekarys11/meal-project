import { useEffect } from 'react';
import './App.css'
import { createClient } from '@supabase/supabase-js';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { increase, setData, setSelectedItem } from './hooks/orderReducer';
import MealCard from './components/MealCard';

const supabase = createClient("https://vbjvlbaapwbzhpmjtnkr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianZsYmFhcHdiemhwbWp0bmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTcwMjcsImV4cCI6MjAyNjMzMzAyN30.MnNuDljYgITjt5m35rgIq2Qi81RyBroSzUZkwAl8jSA");

function App() {
  const order = useSelector((state) => state.order.data)
  const selectedItem = useSelector(state => state.order.selectedItem);
  const dispatch = useDispatch()

  async function getFood() {
    const { data } = await supabase.
      from("restaurants")
      .select(`
    food (id, name, description, price, created_at)
    `)
      .eq("id", 2)

    data[0].food.forEach((item) => {
      item.quantity = 0;
      item.sum = 0;
    })

    dispatch(setData(data[0].food))
  }


  useEffect(() => {
    getFood();
  }, [])






  return (
    <div>
      {
        selectedItem && <Modal
          heading={selectedItem.name}
          description={selectedItem.description}
          quantity={selectedItem.quantity}
          sum={selectedItem.sum}
          increase={() => dispatch(increase(selectedItem.quantity))}
        />
      }

      {
        order.map(item => {
          return (
            <MealCard name={item.name} description={item.description} price={item.price} key={item.id} onShowModal={() => dispatch(setSelectedItem(item))} />
          )
        })
      }


    </div>
  )

}

export default App
