import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {dhaka, rajshahi,rangpur,chittagong,sylhet,mymensingh,barisal,khulna} from './data';
import TimeTable from './table';
import './sample.css';


var today= new Date();
var date= today.getDate();

const styles = theme => ({
  root: {
    backgroundImage: 'url("background.jpg")',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
  },

 logo: {
   verticalAlign: 'center',
   textAlign: 'center',
   height: 210,
   weight: 127,
   display: 'block',
   marginLeft: 'auto',
   marginRight: 'auto',
   
 },
 heading: {
   color: 'white',
   fontSize: '2.5em',
   backgroundColor: '#EB1C24',
   fontWeight: 'bolder',
   textAlign: 'center',
   margin: '15px 25px',
 },
 subHeading: {
   color: 'red',
   textShadow: '1px 1px 1px grey',
   fontSize: '2em',
   textAlign: 'center',
   marginBottom: 5,
   fontWeight: 700,

 },
 selectList: {
   boxShadow: '8px 8px 10px grey',
   fontWeight: 'bold',
   fontSize: 25,
   height: 55,
   width: 250,
   textAlign: 'center',
   display: 'block',
   padding: '6px 12px',
   color: '#555',
   backgroundColor: '#fff',
   border: '1px solid #ccc',
   borderRadius: 4,
   marginLeft: 'auto',
   marginRight: 'auto',
   

 },
 theading: {
  marginTop: 40,
  color: 'white',
  padding: '6px 12px',
  boxShadow: '8px 8px 10px grey',
  fontSize: '2.2em',
  backgroundColor: '#d9534f',
  textAlign: 'center',
  width: '66.67%',
  marginLeft: 'auto',
  marginRight: 'auto',
 },
 timingTable: {
  border: '1px solid #ddd',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30,
  fontSize: 16

 },
 tableHeading: {
   color: 'red',
   textShadow: '1px 1px grey',
   backgroundColor: '#dbdbdb',
   fontSize: '3em',

 },
 btn : {
   fontSize: '2.5em',
   marginTop: 40,
   color: '#fff',
   backgroundColor: '#5cb85c',
   padding: '6px 12px',
   fontWeight: 400,
   textAlign: 'center',
   width: '40%',
   marginLeft: '30%',
   marginRight: '30%',
   border: '1px solid transparent',
   '&:hover': {
    backgroundColor: '#4cae4c',
    
   },
 },
})

class App extends React.Component {
  state= {
    division: '0',
    btn: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  seheriTimes () {
    switch(this.state.division) {
      case '0':
        return dhaka[date].start;
      case '1':
        return barisal[date].start;
      case '2':
        return rajshahi[date].start;
      case '3':
        return khulna[date].start;
      case '4':
        return rangpur[date].start;
      case '5':
        return mymensingh[date].start;
      case '6':
        return sylhet[date].start;
      case '7':
        return chittagong[date].start;
      default:
        return dhaka[date].start;
    }
  }

  iftarTimes () {
    switch(this.state.division) {
      case '0':
        return dhaka[date].end;
      case '1':
        return barisal[date].end;
      case '2':
        return rajshahi[date].end;
      case '3':
        return khulna[date].end;
      case '4':
        return rangpur[date].end;
      case '5':
        return mymensingh[date].end;
      case '6':
        return sylhet[date].end;
      case '7':
        return chittagong[date].end;
      default:
        return dhaka[date].end;
    }
  }

  renderTable =() => {
    this.setState({btn: true})
  }
  
  render() {
    console.log(this.state.division);
    console.log("seheri", this.seheriTimes())
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <img src="logop.png" alt="logo" className={classes.logo}/>
        <h1 className={classes.heading}>পবিত্র মাহে রমজানের সাহরী ও ইফতারের সময়সূচী হিজরি ১৪৪১</h1>
        <h1 className={classes.subHeading}>আপনার বিভাগ নির্বাচন করুন</h1>
        <select id="division" className={classes.selectList} onChange={this.handleChange}>
          <option value="0">ঢাকা</option>
          <option value="1">বরিশাল</option>
          <option value="2">রাজশাহী</option>
          <option value="3">খুলনা</option>
          <option value="4">রংপুর</option>
          <option value="5">ময়মনসিংহ</option>
          <option value="6">সিলেট</option>
          <option value="7">চট্টগ্রাম</option>
        </select>
        <h2 className={classes.theading}>আজকের সময়সূচী</h2>
        <table className={classes.timingTable}>
          <thead>
            <tr className={classes.tableHeading}>
              <th>সাহরীর এবং</th>
              <th>ইফতারের শেষ সময়</th>
            </tr>
          </thead>
          <tbody >
            <td style={{textAlign:'center', fontSize: 20}}>{this.seheriTimes()}</td>
            <td style={{textAlign:'center', fontSize: 20}}>{this.iftarTimes()}</td>
          </tbody>
        </table>
        <button className={classes.btn} onClick={this.renderTable}> বিভাগের সম্পূর্ণ সময়সূচী দেখতে ক্লিক করুন</button>
        {this.state.btn ? <TimeTable division={this.state.division} /> :null}
        

        <h4 style={{textAlign:'center', marginTop: 50, paddingBottom: 70}}>তথ্যসূত্রঃ ইসলামিক ফাউন্ডেশন, গণপ্রজাতন্ত্রী বাংলাদেশে সরকার</h4>
      
      </div>
    )
  }
}



export default withStyles(styles)(App);
