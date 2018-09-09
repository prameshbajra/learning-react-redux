import React, { Component } from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class CardComponent extends Component {
    state = {
        loading: false,
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[<Icon type="plus-circle" />, <Icon type="close-circle" />]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

export default CardComponent;