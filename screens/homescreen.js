import React from 'react';
import { View, FlatList, Button } from 'react-native';
import PaymentItem from './paymentItem';
import CalendarContainer from '../components/CalendarContainer';


const paymentHistory = [
  {

    description: 'Card Topup',
    date: '14 August, 2023 - 4:50PM',
    amount: '+ RWF 500.00',
  },
  {

    description: 'Ticket Booking',
    date: '12 August, 2023 - 8:43PM',
    amount: '-RWF 5,000.00',
  },
  {

    description: 'Card Topup',
    date: '11 August, 2023 - 2:10PM',
    amount: '+RWF 100.00',
  },
];

const HomeScreen = ({}) => {
  return (
    <View>
    <CalendarContainer/>
      <FlatList
        data={paymentHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PaymentItem
            date={item.date}
            description={item.description}
            amount={item.amount}
          />
        )}
      />

     
    </View>
  );
};

export default HomeScreen;
