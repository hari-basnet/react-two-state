import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
    state = {
        count: 0,
        name: 'Koray',
        color: 'yellow',
        message: 'Please login',
        btn: 'Log in'

    }

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    removeOne = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    changeName = () => {
        let name = this.state.name === 'Koray' ? 'Hari' : 'Koray';
        this.setState({ name })

    }

    changeBackgroundColor = () => {
        let color = this.state.color === 'yellow' ? 'orangered' : 'yellow'
        this.setState({ color })
    }

    login = () => {

        const jpt = this.state.btn === 'Log in' ? 'Log out' : 'Log in';
        const samachar = this.state.message === 'Please login' ? 'Welcome Hari!!' : 'Please login'

        this.setState({ message: samachar })
        this.setState({ btn: jpt })
    }

    render = () => {
        return <div style={{ backgroundColor: this.state.color }}>

            <h1>{this.state.message}</h1>
            <button onClick={this.login}>{this.state.btn}</button>
            <h1>Count:{this.state.count}</h1>
            <h2>Your name: {this.state.name}</h2>
            <button onClick={this.addOne}>Add One</button>
            <button onClick={this.removeOne}>Minus One</button>
            <button onClick={this.changeName}>Change name</button>
            <button onClick={this.changeBackgroundColor}>Change background color</button>
            <Header
                title='lets get Started with React'
                firstName='Hari'
                lastName='Basnet'
                year={new Date().getFullYear()}
            />
            <Main
                skills={['HTML', 'CSS', 'JS', 'React']}
            />
            <Footer
                year={new Date().getFullYear()} />
        </div>
    }
}

export default App;
