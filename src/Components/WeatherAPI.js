import React,{Component} from 'react'
import axios from 'axios'
import WeatherUI from './WeatherUI'
import styles from './myStyles.module.css';

class WeatherAPI extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            data:[]
        }
        this.inputRef=React.createRef()
        
    }

    changeHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
       // console.log("Change Handler")
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        
        var city=this.state.name
        const key="8f03b41967494ce183b83927230607"
        var link=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`
        
        axios.get(link)
        .then((Response)=>{
            this.setState({
                data:Response.data
            })
        })
        .catch((error)=>{
            alert(error)
        })
        console.log(this.state.data)

       console.log("Handle Submit clicked")

    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render(){
        const { name, data } = this.state;
        return (
            <div className={styles.container}>
            <form onSubmit={this.handleSubmit} className={styles.Form}>
                
                <label className={styles.cityName}>City Name</label>
                <input type="text" value={name} onChange={this.changeHandler} className={styles.input} ref={this.inputRef} required/>
                <button type="submit" className={(styles.button,styles.glow)}>Submit</button> 
                          
            </form>
            

            <div className={styles.dataContainer}>
            {data.length !== 0 && <WeatherUI props={data} />}  
            </div>
          </div>
        );
    }
}

export default WeatherAPI