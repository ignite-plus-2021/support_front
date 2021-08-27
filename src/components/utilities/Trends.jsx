import { Grid } from "@material-ui/core";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";
import { bardata } from "../layout/trendsdata";
import { piedata as data } from "../layout/piedata";
import Typography from "@material-ui/core/Typography";

const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: "nowrap",
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  paper: {
    marginTop: theme.spacing(20),
    maxWidth: 1500,
  },
});
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" noWrap>
          TRENDS
        </Typography>
        <Paper>
          <Grid container spacing={1} alignItems="center">
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
              <Chart data={bardata}>
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                  name="Total Requests"
                  valueField="totalrequests"
                  argumentField="week"
                  color="#0d47a1"
                  dataSource={bardata}
                />
                <BarSeries
                  name="Resolved Requests"
                  valueField="resolved"
                  argumentField="week"
                  color="#90caf9"
                />
                <Animation />
                <Legend
                  position="bottom"
                  rootComponent={Root}
                  labelComponent={Label}
                />
                <Title text="Number of Requests" />
                <Stack />
              </Chart>
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
              <Chart data={chartData}>
                <PieSeries
                  valueField="val"
                  argumentField="requests"
                  innerRadius={0.8}
                  color="#90caf9"
                />
                <Legend
                  position="bottom"
                  rootComponent={Root}
                  labelComponent={Label}
                />
                <Title text="Active and Resolved Requests" />
                <Animation />
              </Chart>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Demo);
