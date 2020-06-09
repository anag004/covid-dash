# COVID-dashboard

This is a dashboard for our SIRD covid model. The Python code for the projections is located in [this repository](https://github.com/anag004/covid-model). The dashboard is live [here](https://anag004.github.io/covid-dash/). If you notice any bugs file an issue or better yet, open a pull request. We appreciate contributions. 

## Running locally

You need Node installed to run a local server. Clone the repository and inside it run the commands

```
npm i
npm start
```

A development server will be launched and you can visit the site on `localhost:3000`. 

## Contributing

We need help along the following lines

- [ ] Generating projections for more regions in India and around the world.
- [ ] Improving the smoothing algorithm to convert raw data to a death curve.
- [ ] Currently we use observable HQ to embed notebooks for our plots which are hard to update. Make an efficient way to update plots.
- [ ] Improving uncertainty estimation. 
- [ ] UX improvements in the dashboard frontend

## Maintainers

- [anag004](github.com/anag004/)
- [tyagiutkarsh](github.com/tyagiutkarsh/)

## License
See the [LICENSE](https://github.com/anag004/covid-model/blob/master/LICENSE.md) file for license rights and limitations (MIT).
