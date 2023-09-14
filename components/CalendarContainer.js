// CalendarContainer.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarContainer = () => {
  const [date, setDate] = useState(null); // Initialize date as null
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowCalendar(Platform.OS === 'ios'); // Show date picker only on iOS
  };

  const formattedDate = date
    ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    : 'dd/mm/yy'; // Use placeholder text when date is null

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <TouchableOpacity onPress={toggleCalendar}>
          <View style={styles.icon}>
            <FontAwesomeIcon name="calendar" size={24} color="blue" />
          </View>
        </TouchableOpacity>
      </View>

      {showCalendar && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <DateTimePicker
              value={date || new Date()} // Provide a default value for DateTimePicker
              mode="date"
              display="calendar"
              onChange={onDateChange}
            />
            <TouchableOpacity onPress={toggleCalendar} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 2,
    padding: 6,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Push the icon to the left
  },
  dateText: {},
  icon: {
    marginLeft: 230, // Add some margin between date and icon
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
});

export default CalendarContainer;
