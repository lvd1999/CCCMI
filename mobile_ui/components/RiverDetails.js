import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';

export default class RiverDetail extends Component {
  constructor() {
    super();
    this.state = {
      details: {
        name: 'Stream Liffey',
        latitude: '53.3492319',
        longitude: '-6.535848',
        area: '23.58',
        length: '15.41',
        ecologicalStatus: 'Good',
        waterbodyCategory: 'River',
        localAuthority: 'Kildare County Council',
        wfdRisk: 'Review',
        protectedArea: 'Yes',
        canal: 'No',
        cycleRbd: 'Eastern',
      },
    };
  }

  _renderDetailTable() {
    return (
      <>
        {Object.entries(this.state.details).map((entry, i) => {
          return (
            <>
              <View style={styles.wrapContentStyle} key={i}>
                <Text
                  style={[styles.fontsColor, styles.titleStyle]}
                  key={entry[0] + i}>
                  {entry[0]}
                </Text>
                <Text
                  style={[styles.fontsColor, styles.contentStyle]}
                  key={entry[1] + i}>
                  {entry[1]}
                </Text>
              </View>
            </>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{marginTop: 30}}>
            <Text style={{color: '#ffff', fontSize: 30, paddingBottom: 30}}>
              River details
            </Text>
            {this._renderDetailTable()}

            <Button
              title="CHOOSE THIS RIVER"
              color="#7FBBE3"
              onPress={() => alert('choose the river')}></Button>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fontsColor: {
    color: '#FFFFFF',
  },
  titleStyle: {
    opacity: 0.6,
    fontSize: 15,
  },
  contentStyle: {
    fontSize: 20,
    opacity: 0.87,
  },
  wrapContentStyle: {
    borderBottomColor: 'rgba(149,152,154,0.3)',
    borderBottomWidth: 2,
    marginBottom: 20,
  },
});
