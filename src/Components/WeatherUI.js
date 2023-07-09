import React from "react";
import styles from './myStyles.module.css';



function WeatherUI(props){
    console.log(props)

    var location=props.props.location
    var current=props.props.current

    var myCity=location.name
    var temp=current.temp_c
    var icon=current.condition.icon
    var iconText=current.condition.text
    var feelsLike=current.feelslike_c
    var humidity=current.humidity
    var windDirection=current.wind_dir
    var windSpeed=current.wind_kph
    var windDegree=current.wind_degree
    var coLevel=current.air_quality.co
    var noLevel=current.air_quality.no2
    var OLevel=current.air_quality.o3
    var uv=current.uv
    var pressureIN=current.pressure_in
    var pressureMb=current.pressure_mb


    return (
        <div>
            <div className={styles.todaysReport}>
              <h1>Todays Report:</h1>
              </div>
              <div className={styles.dataContainer}>
                <div className={styles.blurredCard}>
                  <div className={styles.title}>
                    <h1>{myCity}</h1>
                    <h2>{temp}&#176;C</h2>
                    <img src={icon} className={styles.mainIcon} />
                  </div>

                  <div>
                    <text className={styles.iconText}>{iconText}</text>
                    <div className={styles.infoContainer}>
                      <text className={styles.feelsLikeText}>Feels Like: {feelsLike}&#176;C</text>
                      <text className={styles.feelsLikeText}>Humidity: {humidity}</text>
                    </div>
                  </div>
                </div>
              </div>

          
            <div className={styles.Container}>
              
              <div className={styles.WindContainer}>
              <div>
                <img className={styles.iconImage} src='/wind.png'/>
              </div>
                <h2>Wind</h2>
                <div>
                <text className={styles.feelsLikeText}>Wind Direction: {windDirection}</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>Wind Speed: {windSpeed}&#160;km/h</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>Wind Degree: {windDegree}</text>
                </div>
              </div>


              <div className={styles.AirContainer}>
              <div>
                <img className={styles.iconImage} src='/quality.png'/>
              </div>
                <h2>Air Quality</h2>
                <div>
                <text className={styles.feelsLikeText}>co: {coLevel.toFixed(2)}</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>o3: {OLevel.toFixed(2)}</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>no2: {noLevel.toFixed(2)}</text>
                </div>
              </div>


              <div className={styles.PUContainer}>
              <div>
                <img className={styles.iconImage} src='/pressure.png'/>
              </div>
                <h2 >Pressure and UV</h2>
                <div>
                <text className={styles.feelsLikeText}>UV: {uv}</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>Pressure_in: {pressureIN}</text>
                </div>
                <div>
                <text className={styles.feelsLikeText}>Pressure_mb: {pressureMb}</text>
                </div>
              </div>

            </div>



        </div>

        
      )
    

}


export default WeatherUI