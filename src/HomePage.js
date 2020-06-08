import React from 'react';
import { Layout, Menu, Typography, Divider } from 'antd';
import NYC from "./graphs/NYC";
import Italy from "./graphs/Italy";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

function HomePage() {
    return (
        <Content style={{ margin: '24px 80px' }}>
        <Title>COVID19 death projections using a SIRD model</Title>
        <Paragraph>
            You can see below various interactive graphs for regions in India and around the world. The red region in each plot indicates that the model is extrapolating deaths in that region. You can use the scrubber to change the amount of data the model fits on and see how that affects the uncertainty intervals. 
        </Paragraph>
        <Title level={2}>New York City</Title>
        <NYC/>
        <Title level={2}>Italy</Title>
        <Italy/>
      </Content>
    )
}

export default HomePage;