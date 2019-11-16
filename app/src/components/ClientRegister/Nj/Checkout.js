import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import HeathStatus from './HeathStatus';
import Review from './Review';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal Details', 'Health Status'
// , 'Review your order'
];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm handleForms={this.handleNext}  />;
//     case 1:
//       return <HeathStatus /> ;
//     // case 2:
//     //   return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [city, setcity] = React.useState("");
  const [state, setstate] = React.useState("");
  const [zip, setzip] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [address1, setaddress1] = React.useState("");
  const [address2, setaddress2] = React.useState("");
  // const [user,setUser] = useState({
  //   fName="",
  //   lna
  // })

  const handleNext = () => {
   if(activeStep!=0)
    {setActiveStep(activeStep + 1);}
    else {

const object=
{
fName:fName,
city:city,
zip:zip,
country:country,
state:state,
address1:address1

};
props.updateform(object);

      if(fName==''||city==''||zip==''||country==''||state==''||address1==''){console.log("not allowed");}
      else  {setActiveStep(activeStep + 1);}
    }
    // console.log(fName);
    // console.log(lName);
    // console.log(city);
    // console.log(state);
    // console.log(zip);
    // console.log(country);

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
const niraj=(e)=>{
  const x={name:e.target.name,
    value: e.target.value
  };

  // props.updateform(x);
  if(e.target.name=='firstName') {setfName(e.target.value);}
  // if(e.target.name=='lastName') {setlName(e.target.value);}
  if(e.target.name=='address1') {setaddress1(e.target.value);}
  // if(e.target.name=='address2') {setaddress2(e.target.value);}
  // if(e.target.name=='firstName') {setfName(e.target.value);}
  if(e.target.name=='city') {setcity(e.target.value);}
  if(e.target.name=='state') {setstate(e.target.value);}
  if(e.target.name=='zip') {setzip(e.target.value);}
  if(e.target.name=='country') {setcountry(e.target.value);}

  //console.log(fName); console.log("rt");
}
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Register Yourself
          </Typography>
        </Toolbar> */}
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Client Registration 
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* {getStepContent(activeStep)} */}
                {activeStep==0?<AddressForm  {...this.props} handleForm={niraj} />:null}
                {activeStep==1? <HeathStatus /> :null}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
}