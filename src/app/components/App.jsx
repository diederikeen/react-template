import React from 'react';
import { connect } from 'react-redux';

export function App({ children, user }) {

    return (
        <main>
          {children}
        </main>
    );
}

export default connect(state => ({
    user: state.user,
}))(App);
