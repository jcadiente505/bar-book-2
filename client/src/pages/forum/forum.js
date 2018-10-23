import React, { Component } from 'react';
import TopicList from '../../components/list';

class Forum extends Component {
  state = {
    newTopic: {
      username: "",
      title: "",
      summary: "",
    }
  }

  render() {
    return (
      <div>
        <TopicList/>
      </div>
    )
  }
}


export default Forum;