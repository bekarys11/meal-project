import { useEffect } from 'react';
import './App.css'
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { increase, setData, setSelectedItem } from './hooks/orderReducer';
import MealCard from './components/MealCard';
import { useGetOrdersQuery } from './api/order';



function App() {
  const selectedItem = useSelector(state => state.order.selectedItem);
  const dispatch = useDispatch()
  const { data, isLoading } = useGetOrdersQuery()



  if (isLoading) {
    return (
      <div>loading...</div>
    )
  }


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
        data.map(item => {
          return (
            <MealCard name={item.name} description={item.description} price={item.price} key={item.id} onShowModal={() => dispatch(setSelectedItem(item))} />
          )
        })
      }


    </div>
  )

}

export default App
