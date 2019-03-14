import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/design/Grid/GridItem.jsx";
import GridContainer from "components/design/Grid/GridContainer.jsx";
import Table from "components/design/Table/Table.jsx";
import Tasks from "components/design/Tasks/Tasks.jsx";
import CustomTabs from "components/design/CustomTabs/CustomTabs.jsx";
import Danger from "components/design/Typography/Danger.jsx";
import Card from "components/design/Card/Card.jsx";
import CardHeader from "components/design/Card/CardHeader.jsx";
import CardIcon from "components/design/Card/CardIcon.jsx";
import CardBody from "components/design/Card/CardBody.jsx";
import CardFooter from "components/design/Card/CardFooter.jsx";

import { bugs, website, server } from "components/design/variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import trafficSources from "helpers/trafficSources.js";
import monthlyVisits from "helpers/monthlyVisits.js";
import socialNetWorkSources from "helpers/socialNetWorkSources.js";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Global Rank</p>
                <h3 className={classes.cardTitle}>
                  {this.props.data.GlobalRank.Rank}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  Last 3 Months
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Time Per Visit</p>
                <h3 className={classes.cardTitle}>{(this.props.data.Engagments.TimeOnSite-(this.props.data.Engagments.TimeOnSite%=60))/60} Minutes</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Per Visit in the Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Pages Per Visit</p>
                <h3 className={classes.cardTitle}>{parseInt(this.props.data.Engagments.PagePerVisit)}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Average in the last Week
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Estimated Visits</p>
                <h3 className={classes.cardTitle}>{parseInt(this.props.data.Engagments.Visits)}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Per Month
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={monthlyVisits(this.props.data).data}
                  type="Line"
                  options={monthlyVisits(this.props.data).options}
                  listener={monthlyVisits(this.props.data).animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Visits</h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Last 6 months
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={trafficSources(this.props.data).data}
                  type="Bar"
                  options={trafficSources(this.props.data).options}
                  responsiveOptions={trafficSources(this.props.data).responsiveOptions}
                  listener={trafficSources(this.props.data).animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Traffic Sources</h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Last 3 months
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={socialNetWorkSources(this.props.data).data}
                  type="Line"
                  options={socialNetWorkSources(this.props.data).options}
                  listener={socialNetWorkSources(this.props.data).animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Social Network Sources</h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
