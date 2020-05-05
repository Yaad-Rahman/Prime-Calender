import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { dhaka, rajshahi, rangpur, chittagong, sylhet, mymensingh, barisal, khulna, manik } from './data';
import TimeTable from './table';
import './sample.css';


var today = new Date();
var date = today.getDate();

const banglaDate = () => {
  var en2bnstr = require("en2bnstr");
  const bDate = date.toString().getBanglaNumber()
  return bDate;
}


const styles = theme => ({
  root: {
    backgroundImage: 'url("website-cover.gif")',
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
    ['@media (max-width:480px)']: {
      height: 150
    }

  },
  heading: {
    color: 'white',
    fontSize: '2.5em',
    backgroundColor: '#EB1C24',
    fontWeight: 'bolder',
    textAlign: 'center',
    margin: '15px 25px',
    ['@media (max-width:480px)']: {
      fontSize: '1em'
    }
  },
  subHeading: {
    color: '#b18421',
    textShadow: '1px 1px 1px black',
    fontSize: '2em',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 700,
    ['@media (max-width:480px)']: {
      fontSize: '1.2em'
    }

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
    ['@media (max-width:480px)']: {
      width: 120,
      fontSize: '1.5em'
    }



  },
  theading: {
    marginTop: 40,
    color: 'white',
    padding: '6px 12px',
    boxShadow: '5px 5px 10px grey',
    fontSize: '2.2em',
    backgroundColor: '#eb1c24',
    textAlign: 'center',
    width: '66.67%',
    marginLeft: 'auto',
    marginRight: 'auto',
    ['@media (max-width:480px)']: {
      fontSize: '1em'
    }
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
    padding: 10,
    fontSize: '3em',
    ['@media (max-width:480px)']: {
      fontSize: '1em',

    }

  },
  btn: {
    fontSize: '2.5em',
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#eb1c24',
    padding: '6px 12px',
    fontWeight: 400,
    textAlign: 'center',
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    border: '1px solid transparent',
    ['@media (max-width:480px)']: {
      fontSize: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%'
    },
    '&:hover': {
      backgroundColor: '#ce181e',



    },
  },
})

class App extends React.Component {
  state = {
    division: '0',
    btn: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  seheriTimes() {
    switch (this.state.division) {
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
      case '8':
        return manik[date].start;
      default:
        return dhaka[date].start;
    }
  }

  iftarTimes() {
    switch (this.state.division) {
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
      case '8':
        return manik[date].end;
      default:
        return dhaka[date].end;
    }
  }

  renderTable = () => {
    this.setState({ btn: true })
  }

  ramadan() {
    switch (date) {
      case 6:
        return '১২';
      case 7:
        return '১৩';
      case 8:
        return '১৪';
      case 9:
        return '১৫';
      case  10:
        return '১৬';
      case  11:
        return '১৭';
      case  12:
        return '১৮';
      case  13:
        return '১৯';
      case  14:
        return '২০';
      case  15:
        return '২১';
      case  16:
        return '২২';
      case  17:
        return '২৩';
      case  18:
        return '২৪';
      case  19:
        return '২৫';
      case  20:
        return '২৬';
      case  21:
        return '২৭';
      case  22:
        return '২৮';
      case  23:
        return '২৯';
      case  24:
        return '৩০';

    }
  }

  render() {
    console.log(this.state.division);
    console.log("seheri", this.seheriTimes());
    console.log("bangla", date);

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src="logop.png" alt="logo" className={classes.logo} />
        <h1 className={classes.heading}>পবিত্র মাহে রমজানের সাহরী ও ইফতারের সময়সূচী হিজরি ১৪৪১</h1>
        <h1 className={classes.subHeading}>আপনার জেলা নির্বাচন করুন</h1>
        <select id="division" className={classes.selectList} onChange={this.handleChange}>
          <option value="0">ঢাকা</option>
          <option value="8">মানিকগঞ্জ</option>
          <option value="2">বগুড়া</option>
          <option value="2">সিরাজগঞ্জ
</option>
          <option value="4">পঞ্চগড়
</option>
          <option value="4">নীলফামারি
</option>
          <option value="1">বরিশাল
</option>
          <option value="1">ভোলা
</option>
          <option value="0">শরিয়তপুর
</option>
          <option value="0">ফরিদপুর
</option>
          <option value="0">মাদারিপুর
</option>
          <option value="4">দিনাজপুর
</option>
          <option value="2">জয়পুরহাট
</option>
          <option value="4">ঠাকুরগাঁও
</option>
          <option value="2">নওগাঁ
</option>
          <option value="1">ঝালকাঠি
</option>
          <option value="2">নাটোর
</option>
          <option value="2">পাবনা
</option>
          <option value="2">রাজবাড়ি
</option>
          <option value="3">মাগুরা
</option>
          <option value="1">পটুয়াখালি
</option>
          <option value="0">গোপালগঞ্জ
</option>
          <option value="2">রাজশাহী
</option>
          <option value="3">কুষ্টিয়া
</option>
          <option value="1">বরগুনা
</option>
          <option value="3">নড়াইল
</option>
          <option value="3">বাগেরহাট</option>
          <option value="3">ঝিনাইদহ
</option>
          <option value="3">খুলনা
</option>
          <option value="3">যশোর
</option>
          <option value="3">চুয়াডাঙ্গা
</option>
          <option value="1">পিরোজপুর
</option>
          <option value="2">চাঁপাইনবাবগঞ্জ
</option>
          <option value="3">মেহেরপুর
</option>
          <option value="3">সাতক্ষীরা

</option>
          <option value="4">রংপুর
</option>
          <option value="0">গাজীপুর
</option>
          <option value="4">গাইবান্ধা
</option>
          <option value="7">নোয়াখালি
</option>
          <option value="7">কক্সবাজার</option>
          <option value="7">চট্টগ্রাম
</option>
          <option value="0">নরসিংদি
</option>
          <option value="5">জামালপুর
</option>
          <option value="4">কুড়িগ্রাম
</option>
          <option value="5">শেরপুর

</option>
          <option value="4">লালমনিরহাট
</option>
          <option value="5">ময়মনসিংহ
</option>
          <option value="7">কুমিল্লা
</option>
          <option value="0">কিশোরগঞ্জ
</option>
          <option value="7">ফেনী
</option>
          <option value="5">নেত্রকোনা
</option>
          <option value="7">ব্রাহ্মণবাড়িয়া
</option>
          <option value="7">রাঙ্গামাটি
</option>
          <option value="7">বান্দরবান
</option>
          <option value="7">খাগড়াছড়ি
</option>
          <option value="6">হবিগঞ্জ
</option>
          <option value="6">সুনামগঞ্জ
</option>
          <option value="6">মৌলভীবাজার
</option>
          <option value="6">সিলেট
</option>
          <option value="7">চাঁদপুর
</option>
          <option value="7">লক্ষ্মীপুর
</option>
          <option value="0">মুন্সিগঞ্জ
</option>
          <option value="0">নারায়ণগঞ্জ
</option>
          <option value="0">টাঙ্গাইল
</option>
        </select>
        <h2 className={classes.theading}>আজকের সময়সূচী(<span>{this.ramadan()}</span><span> রমজান,</span><span>{banglaDate()}</span> মে ২০২০)</h2>
        <table className={classes.timingTable}>
          <thead>
            <tr className={classes.tableHeading}>
              <th>সাহরীর শেষ সময়</th>
              <th style={{ paddingLeft: 10 }}>ইফতারের সময়</th>
            </tr>
          </thead>
          <tbody >
            <td style={{ textAlign: 'center', fontSize: 40, color: 'black', backgroundColor: 'white' }}>{this.seheriTimes()}</td>
            <td style={{ textAlign: 'center', fontSize: 40, color: 'black',backgroundColor: 'white' }}>{this.iftarTimes()}</td>
          </tbody>
        </table>
        <button className={classes.btn} onClick={this.renderTable}> জেলার সম্পূর্ণ সময়সূচী দেখতে ক্লিক করুন</button>
        {this.state.btn ? <TimeTable division={this.state.division} /> : null}


        <h4 style={{ textAlign: 'center', marginTop: 50, paddingBottom: 70 }}>তথ্যসূত্রঃ ইসলামিক ফাউন্ডেশন, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h4>

      </div>
    )
  }
}



export default withStyles(styles)(App);
