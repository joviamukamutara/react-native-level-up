import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentItem = ({ date, time, description, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.amount}>{amount} RWF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6, // Smaller padding
    marginVertical: 4, // Smaller margin between items
    backgroundColor: 'skyblue',
    borderRadius: 15, // Smaller border radius for more visible rounding
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 2, // Smaller margin between info and amount
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
});

export default PaymentItem;
