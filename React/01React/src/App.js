const App = () => {
    return React.createElement(
        'div',
        {},
        React.createElement(
            'h1',
           {style: { background: "blue", color: "black"}},
            'Basic react class using React create element method'
        )
    );
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
console.log(container);
