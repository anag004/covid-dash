import React from 'react';
import { Typography, Layout } from "antd";
import Latex from "react-latex";

const {Title, Paragraph} = Typography;
const { Content } = Layout;

function Details() {
    return (
        <Content style={{ margin: '24px 80px' }}>
            This is a high-level overview of the model. For the technical report, check out the <a href="https://github.com/anag004/covid-model/blob/master/ihme/whitepaper.pdf">whitepaper</a>.

            <Title style={{ marginTop: "10px" }}>What is a SIRD model?</Title>
            <Paragraph style={{fontSize: "14pt"}}>
                SIRD models are a type of <a href="en.wikipedia.org/wiki/Compartmental_models_in_epidemiology">compartmental epidemiological model</a>. As the name suggests, they assume that the entire population is partitioned into different compartments. A SIRD model considers four compartments <b>S </b> (susceptible to the infection), <b>I</b> (infected), <b>R</b> (recovered) and <b>D </b> (dead). In our implementation, we ignore the number of infected people and only count the number of dead. This is because the number of infections are likely a huge underestimate of the true value because of sparse testing. The number of deaths, on the other hand are likely to be much more accurate. 
            </Paragraph>

            <Paragraph style={{fontSize: "14pt"}}>
                <Latex>
                    The model is specified by a set of equations which describe how the numbers of people in each compartment changes with time. These equations depend upon several parameters which need to supplied or inferred from data. There are two disease-specific parameters $T_i$ - the time period for which a person stays infectious and $\gamma$ - the fraction of infected people who die in a day. These can be more or less fixed based on our knowledge about the spread of the disease in various locations. 
                </Latex>
            </Paragraph>

            <Paragraph style={{fontSize: "14pt"}}>
                <Latex>
                    There is one location-specific $R$ - the reproduction number, which measures the propensity of an infected person to transmit the virus to others. This is a time-varying parameter and depends among other things on the effectiveness of contact tracing and quarantine and the degree of social distancing. In order for the number of cases and deaths to reduce, $R$ must drop below $1$. It is challenging to estimate this number given its time-varying nature and the large number of variables which influence it.
                </Latex>
            </Paragraph>
            <Title style={{ marginTop: "10px" }}>
                <Latex>How is $R$ estimated?</Latex>
            </Title>

        </Content>
    );
}

export default Details;