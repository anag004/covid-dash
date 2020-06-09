import React from 'react';
import { Typography, Layout } from "antd";
import Latex from "react-latex";

const {Title, Paragraph} = Typography;
const { Content } = Layout;

function Details() {
    return (
        <Content style={{ margin: '24px 80px' }}>
            This is a high-level overview of the model. For the technical side of things, check out the <a href="https://github.com/anag004/covid-model/blob/master/ihme/whitepaper.pdf">whitepaper</a> and <a href="https://github.com/anag004/covid-model/">code</a>. 

            <Title style={{ marginTop: "10px" }}>Why another model?</Title>

            <Paragraph style={{fontSize: "14pt"}}>
                There are already many COVID19-related models in the scientific community. Why do we need another one? Here are some of the reasons why we made our model.

                <ul style={{paddingLeft: "2em"}}>
                    <li><b>End of the lockdown :</b> Governments all across the country have decided to reopen. While that is a complex policy decision based on many considerations, we wanted to highlight that this <i>does not mean</i> that India is in the clear. In all likelihood, the worst is yet to come and our model reflects that. We wish to stress that social distancing (as far as possible) is still crucial to keep you and your family safe.</li>
                    <li><b>Transparency and accessibility :</b> Many models in the literature are described very vaguely or in a technical manner. We believe that any honest attempt at modeling must be completely transparent in its approach. Consequently, we have completely open-sourced our code and specified our model in detail. Further, being a part of an active student community, we hope that we can engage other people in our efforts to make this model better and increase its outreach.</li>
                    <li><b>Simplicity :</b> Although we use some novel techniques to implement our model, conceptually it is quite simple and well-studied in epidemiology. We think this is an advantage because the lack of information about the coronavirus implies that complex models are not feasible or tend to overfit. Further, a simple model is easy for other people to grasp and contribute to. We think a model with impenetrable mathematics is unlikely to convice many people to take note of its predictions. On the other hand, a simple community-driven model is much more likely to be able to achieve this goal. </li>
                </ul> 
            </Paragraph>

            <Title>What is a SIRD model?</Title>
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

            <Paragraph style={{fontSize: "14pt"}}>
                <Latex>In order to estimate $R$ we need social distancing data. </Latex> In our model, we use aggregated social mobility data <a href="https://www.google.com/covid19/mobility/">from Google</a>. <Latex> These reports use cellphone location data to estimate the percentage change in mobility (from pre-pandemic levels) at several key locations like grocery stores, restaurants, etc. In our model, we assume that $R$ is correlated with this percentage change in mobility. Specifically, we assume that $R = R_M$ when the mobility is maximum and $R = R_m$ when it is minimum. The $R$ between these two points is estimated as the linear combination of $R_M$, $R_m$ and the social mobility at that point of time. $R_M$ and $R_m$ are parameters which are learnt from the data. This is a crude estimate and one of our goals is to obtain more detailed social distancing data to improve our estimate of $R$. 
                </Latex>
            </Paragraph>
            
            <Title style={{ marginTop: "10px" }}>
                How is uncertainty calculated?
            </Title>
            <Paragraph style={{fontSize: "14pt"}}>
                <Latex>
                    At a high level, we calculate the uncertainty by varying the parameters $R_M, R_m$ over a grid. We retain those values for which the error from the data is not too large. For each admissible set of values of $R_M$ and $R_m$, we plot curves and take the maximum and minimum of these to get the blue uncertainty region you see in the plots. 
                </Latex>
            </Paragraph>

            <Title style={{ marginTop: "10px" }}>
                How did we get the data?
            </Title>
            <Paragraph style={{fontSize: "14pt"}}>
                    For the modelling and prediction of COVID19 deaths, we source the data from the repositories maintained by relevant owners. The data is publicly available on the following links:
                    <ul style={{paddingLeft: "2em"}}>
                        <li><a href = "https://github.com/CSSEGISandData/COVID-19">John Hopkins CSSE COVID19 Repository</a> : This is the public repository maintained by the Center for Systems Science and Engineering at John Hopkins University. We used this repo for daily deceased data for regions outside India.</li>
                        <li><a href = "https://www.covid19india.org/">covid19india Tracker Project</a> : This is a volunteer-driven project which compiles detailed data for COVID19 cases in India and relevant resources. This data is publicly available through the <a href = "https://api.covid19india.org/">API</a>. We used this resource for daily deceased data for states in India.</li>
                        <li><a href = "https://www.google.com/covid19/mobility/">Google Social Mobility Report</a> : The data, published in aggregated form, shows the change in visitor count at public places against pre-COVID19 days. The baseline day is the median value for a five-week period from Jan-03-2020 to Feb-06-2020. The places are categorized into Retail and Recreation, Grocery and Pharmacy, Parks, Transit Stations, Workplaces, and Residential. We use this data as a measure of social distancing practices for any region in India or outside.</li>
                    </ul>
            </Paragraph>
        </Content>
    );
}

export default Details;