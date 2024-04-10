import { useEffect } from 'react';
import './App.css'
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { increase, setData, setSelectedItem } from './hooks/orderReducer';
import MealCard from './components/MealCard';
import { supabase } from './api/api';



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
