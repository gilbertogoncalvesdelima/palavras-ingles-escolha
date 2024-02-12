import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import TermList from './components/TermList';
import TermDefinition from './components/TermDefinition';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <TermList />
                <TermDefinition />
            </View>
        </Provider>
    );
};

export default App;
