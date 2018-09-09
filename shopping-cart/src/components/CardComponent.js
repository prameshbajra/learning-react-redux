import React, { Component } from 'react';
import { Skeleton, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: !this.state.loading });
        }, 3000)
    }


    render() {
        const { loading } = this.state;
        return (
            <div>
                <Card
                    style={{ width: 300, marginTop: 50 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[
                        <div onClick={() => this.props.addToCart(this.props.item)} >
                            <Icon type="plus-circle" /> Add item to cart
                        </div>
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            title={this.props.item.name}
                            description={
                                this.props.item.description.length > 160 ?
                                    this.props.item.description.substring(0, 160) + "..." :
                                    this.props.item.description
                            }
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

export default CardComponent;