import React from 'react';
import { Typography, Layout } from "antd";

const {Title, Paragraph} = Typography;
const { Content } = Layout;

function Contact() {
    return (
        <Content style={{ margin: '24px 80px' }}>
            <Title>Who are we?</Title>
            <Paragraph style={{fontSize: "14pt"}}>
                We are two juniors at IIT Delhi - Ananye Agarwal (Comp. Sci) and Utkarsh Tyagi (Electrical Eng.). We originally started this project for submission to a challenge but as the virus progressed in India we realized the potential impact a convincing model could create.
            </Paragraph>
            <Title>Contacts</Title>
            <Paragraph style={{fontSize: "14pt"}}>
                <ul style={{ paddingLeft: "2em" }}>
                    <li><b>GitHub :</b> Our GitHub handles are <a href="https://github.com/anag004">anag004</a> and <a href="https://github.com/tyagiutkarsh">tyagiutkarsh</a>. The code for the SIRD model lives <a href="https://github.com/anag004/covid-model">here</a> while the dashboard is <a href="https://github.com/anag004/covid-dash">here.</a> For most queries/bugs, you can open an issue (or better yet, a pull request) in the appropriate repositories.</li>
                    <li><b>Email</b> You can email us at <a href="mailto:ananayagarwal@gmail.com">ananayagarwal@gmail.com</a> or <a href="mailto:utkarshtyagi99@gmail.com">utkarshtyagi99@gmail.com.</a></li>
                </ul>
            </Paragraph>
            <Title>Contributing</Title>
            <Paragraph style={{fontSize: "14pt"}}>
                In the true spirit of open source, we believe that the efficacy of a model is vastly improved if people pitch in with their ideas to improve. Therefore, we welcome contributions of all kinds from the community ranging from fixing typos and writing docs to improving the model algorithm. If you need help in contributing, please contact us. Here are some directions in which we appreciate help.

                <ul style={{ paddingLeft: "2em" }}>
                    <li>Generating projections for more regions in India and around the world.</li>
                    <li>You may have noticed that the model curve does not fit well to the initial part of the death curve. We believe this is because of the discrete nature of the death count. We want to improve the smoothing algorithm to get a "better" curve.</li>
                    <li>We currently use embedded notebooks from observable HQ for our plots which are hard to update. We want a better system for managing our plots one which does not ideally need a third-party service.</li>
                    <li>Our uncertainty intervals are computed based on empirical observation from fitting to other regions in the world. We want a more principled way of computing uncertainties.</li>
                    <li>Make the frontend prettier and easier to use :)</li>
                </ul>
            </Paragraph>
        </Content>
    );
}

export default Contact;