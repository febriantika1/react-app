import React from 'react';
import './App.css';

class CurrencyInput extends React.Component{
  _handleChange =(e)=> {
    this.props.onChangeCurrency(e.target.value);
  }
render(){
  const {curLabel,currency}=this.props;
  return(
  <>
  <div>nilai uang</div>
  <label>
    {curLabel=== 'Rp'? 'rupiah:': 'dollar'}:
    <input type ="number" value={currency}onChange={this._handleChange}></input>
  </label>
  <br/>
  </>
  )
}
}
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      rupiah :0,
      dollar:0
    }
  }
  onSubmit = (e) =>{
    e.preventDefault();
    alert(`rupiah: ${this.state.rupiah} dengan dollar;${this.state.dollar}`)
  }
  onChangeRupiah=(rupiah)=>{
    let dollar =(parseFloat(rupiah)/14272.05).toString();
    this.setState({rupiah,dollar})
  }
  onChangeDollar=(dollar)=>{
    let rupiah =(parseFloat(dollar)*14272.05).toString();
    this.setState({rupiah,dollar})
  }
render(){
  const {rupiah,dollar}=this.state;
  return(
    <form onSubmit={this.onSubmit}>
      <br/>
      <div><h2 class="pertama">Penggubah Mata Uang Rupiah ke Dollar</h2></div>
      <div class="td"><center>nilai dollar ke rupiah saat ini$ 1 =Rp 14272.05 </center><div/> <br/>
      <td class="tdr"><center> </center></td></div>
      <br/>
      <br/>
      <br/>
      <br/>
      <CurrencyInput curLabel="Rp" currency ={rupiah}onChangeCurrency={this.onChangeRupiah}/>
      <br/>
      <CurrencyInput curLabel="$" currency ={dollar}onChangeCurrency={this.onChangeDollar}/>
      <br/>
    <button type="submit"> lihat hasil</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="TO">Terima kasih telah menggunakan layanan ini :)</div>
    </form>
  );
}  
}

export default App;