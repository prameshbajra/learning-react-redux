import React, { Component } from 'react';



class LayoutComponent extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <div>
                Pram
            </div>
        );
    }
}



export default LayoutComponent;