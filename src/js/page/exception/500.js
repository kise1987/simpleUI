import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Exception from '../../../components/Exception/Exception.js';
import Footer from '../../../components/layout/Footer/Footer.js';

class Exception500 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ContentHead title="500服务器出错了"></ContentHead>
                <Exception imgUrl="../resouce/500.png" text="服务器故障，请稍后再试"></Exception>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default Exception500;