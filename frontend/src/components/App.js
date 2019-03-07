import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_NAILS_QUERY } from '../queries';

// custom components
import NailItem from './nail/NailItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rich Sex</h1>
        <Query query={GET_ALL_NAILS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;
            console.log(data);

            return (
              <ul>
                {data.getAllNails.map(nail => (
                  <NailItem key={nail._id} {...nail} />
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default App;
