'use strict';

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';

const print = function(value) {
  console.log(value);
};

class Index extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
    this.fetch_example();
    this.jsonp_example();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  fetch_example() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET', headers: '{"Content-Type":"json"}' })
      .then(response => response.json())
      .then((data, error) => {
        console.log('fetch example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  jsonp_example() {
    jsonp('https://assets.airbnb.com/frontend/search_results.js', { jsonpCallbackFunction: 'search_results', body: {} })
      .then(response => response.json())
      .then((data, error) => {
        console.log('jsonp example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  render() {
    return (
      <View style={styles.box}>
        {this.state.data.map((item, index) => {
          return (
            <View
              key={index}
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <View style={styles.bd}>
                <Image
                  style={styles.layer}
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png' }}
                />
                <Image style={styles.bg} source={{ uri: item.coverImage }} />
                <View style={styles.wrap}>
                  <Image
                    style={styles.riverdinwei}
                    source={{ uri: 'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png' }}
                  />
                  <Text style={styles.distance}>距离500m</Text>
                </View>
              </View>
              <View style={styles.main}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.ft}>
                <View style={styles.block}>
                  <Image
                    style={styles.xianjin}
                    source={{ uri: 'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png' }}
                  />
                  <Text style={styles.fashionHome}>{item.user.userName}</Text>
                </View>
                {this.isReadCountShow(item.readCount) && (
                  <View style={styles.group}>
                    <Image
                      style={styles.favorite}
                      source={{ uri: 'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png' }}
                    />
                    <Text style={styles.num}>{item.readCount}</Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index;

const styles = StyleSheet.create({
  box: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', height: 534 },
  bd: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    opacity: '1.00',
    width: 342,
    height: 342
  },
  layer: { position: 'absolute', top: 0, left: 0, width: 342, height: 342, overflow: 'hidden' },
  bg: { position: 'absolute', top: 0, left: 0, opacity: '1.00', width: 342, height: 342 },
  wrap: {
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 18,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.40)',
    paddingRight: 9,
    paddingLeft: 10,
    height: 30
  },
  riverdinwei: { opacity: '1.00', width: 14, height: 18 },
  distance: {
    marginLeft: 4,
    width: 84,
    height: 22,
    lineHeight: 22,
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 400,
    lines: 1
  },
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 342,
    height: 114
  },
  title: {
    marginTop: 22,
    width: 300,
    height: 88,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 44,
    color: '#333333',
    fontSize: 30,
    fontWeight: 400,
    lines: 2
  },
  ft: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#ffffff',
    paddingRight: 17,
    paddingLeft: 18,
    width: 342,
    height: 78,
    overflow: 'hidden'
  },
  block: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: 30 },
  xianjin: { width: 30, height: 30 },
  fashionHome: {
    marginLeft: 6,
    width: 96,
    height: 28,
    lineHeight: 28,
    whiteSpace: 'nowrap',
    color: '#666666',
    fontSize: 24,
    fontWeight: 300,
    lines: 1
  },
  group: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: 30 },
  favorite: { width: 22, height: 22 },
  num: {
    marginLeft: 5,
    width: 36,
    height: 26,
    lineHeight: 26,
    whiteSpace: 'nowrap',
    color: '#999999',
    fontSize: 22,
    fontWeight: 400,
    lines: 1
  }
});
