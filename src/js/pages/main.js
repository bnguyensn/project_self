import React, {Component} from 'react';
import Header from '../components/header';
import Content from './content';
import Footer from '../components/footer';
import '../../css/main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default Main