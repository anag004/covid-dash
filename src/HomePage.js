import React from 'react';
import { Layout, Menu, Typography, Divider } from 'antd';
import NYC from "./graphs/NYC";
import Italy from "./graphs/Italy";
import Spain from "./graphs/Spain";
import Maha from "./graphs/Maha";
import Delhi from "./graphs/Delhi"
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

function HomePage() {
    return (
        <Content style={{ margin: '24px 80px' }}>
        <Title>COVID19 death projections using a SIRD model</Title>
        <Paragraph style={{fontSize: "14pt"}}>
            You can see below various interactive graphs for regions in India and around the world. The red region in each plot indicates that the model is extrapolating deaths in that region. You can use the scrubber to change the amount of data the model fits on and see how that affects the uncertainty intervals. 
        </Paragraph>
        <Paragraph style={{fontSize: "14pt"}} type="danger">
            Models are only as good as their assumptions. It is a bad idea to take any sort of projections at face value. We encourage you to read about our model <Link to="/covid-dash/details" component={Typography.Link}>here</Link>. 
        </Paragraph>
        <Title level={2}>Delhi</Title>
        <Delhi/>
        <Title level={2}>Maharashtra</Title>
        <Maha/>
        <Title level={2}>New York City</Title>
        <NYC/>
        <Title level={2}>Italy</Title>
        <Italy/>
        <Title level={2}>Spain</Title>
        <Spain/>
      </Content>
    )
}

export default HomePage;