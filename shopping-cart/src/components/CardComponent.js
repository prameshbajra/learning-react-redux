import React, { Component } from 'react';
import { Skeleton, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class CardComponent extends Component {
    state = {
        loading: false,
    }

    onChange = () => {
        this.setState({ loading: !this.state.loading });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <div><Icon type="plus-circle" /> Add Item</div>,
                        <div><Icon type="close-circle" /> Remove Item</div>
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://prameshbajra.github.io/static/assets/img/landing/pramesh.png" />}
                            title="Super cool Name Here ..."
                            description="Some super cool item description ... Dead Booth ... Super cool from ant design"
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

export default CardComponent;