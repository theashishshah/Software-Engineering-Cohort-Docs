import React from 'https://esm.sh/react@19.1.0';
import ReactDOM from 'https://esm.sh/react-dom@19.1.0/client';

const Chai = (props) => {
    const { price, name: rawName } = props;
    const name = rawName || 'Ginger';
    return React.createElement('div', {}, [
        React.createElement('h3', {}, `name of chai: ${name}`),
        React.createElement('p', {}, `price of chai: ${price}`),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(
            'h1',
            { style: { margin: '0px', padding: 0 } },
            'Chai variations in India'
        ),
        React.createElement(Chai, { name: '', price: 120 }),
    ]);
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
console.log(container);
