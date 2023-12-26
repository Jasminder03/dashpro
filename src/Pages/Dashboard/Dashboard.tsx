import './Dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css"
import EmailIcon from '@material-ui/icons/Email';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import CircularProgress from '@mui/joy/CircularProgress';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TrafficIcon from '@material-ui/icons/Traffic';
import { ResponsiveLine } from '@nivo/line'
import GetAppIcon from '@material-ui/icons/GetApp';
import { bardat } from '../../bar';
import { data } from '../../country';
import { ResponsiveBar } from '@nivo/bar'
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { world } from '../../worldmap';
import { colorscale } from '../../worldmap';
import CountUp from 'react-countup' ;
import { useState,useEffect } from 'react';



const Dashboard = () => {

const [progress, setprogress] = useState(0)
const [progtwo, setprogtwo] = useState(0)
const [progthree, setprogthree] = useState(0)
const [progfour, setprogfour] = useState(0)


useEffect(() => {
  const timer = setInterval(() =>{

    setprogress((prevprogress) => (prevprogress>=75 ? 75 : prevprogress + 1));
  }, 0);

  return() => {
    clearInterval(timer);
  };
},[]);

useEffect(() => {
  const timer = setInterval(() =>{

    setprogtwo((prevprogtwo) => (prevprogtwo>=50 ? 50 : prevprogtwo + 1));
  }, 0);

  return() => {
    clearInterval(timer);
  };
},[]);

useEffect(() => {
  const timer = setInterval(() =>{

    setprogthree((prevprogthree) => (prevprogthree>=25 ? 25 : prevprogthree + 1));
  }, 0);

  return() => {
    clearInterval(timer);
  };
},[]);

useEffect(() => {
  const timer = setInterval(() =>{

    setprogfour((prevprogfour) => (prevprogfour>=85 ? 85 : prevprogfour + 1));
  }, 0);

  return() => {
    clearInterval(timer);
  };
},[]);




  return (
    
          <div className='cotainer-fluid App'>
            <div className='row mt-3 me-2'>
              <div className='col'>
                <div className="card">
                  <div className="card-body content text-light">
                    <div className='row'>
                      <div className='col'>
                        <h5 className="card-title"><EmailIcon className='icon fs-2' /></h5>
                        <h4 className="card-title">
                          <CountUp
                          start={0}
                          end={12361}
                          decimal='1'
                          />

                        </h4>
                        <p className="card-text text-success ">Emails Sent</p>
                      </div>
                      <div className='col-3 mt-2'>
                        <CircularProgress determinate value={progress} color='success' />
                        <h6 className='text-success mt-2 text'>+25%</h6>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='col'>
                <div className="card">
                  <div className="card-body content text-light">
                    <div className='row'>
                      <div className='col'>
                        <h5 className="card-title"><PhoneCallbackIcon className='icon fs-2' /></h5>
                        <h4 className="card-text">
                        <CountUp 
                        start={0}
                        end={443225}
                        decimal='1'
                        prefix='+'
                        />
                        </h4>
                        
                        <p className="card-text text-success">Sales Obtained</p>
                      </div>
                      <div className='col-3 mt-2'>
                        <CircularProgress determinate value={progtwo} color='success' />
                        <h6 className='text-success mt-2 '>+22%</h6>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className="card">
                  <div className="card-body content text-light">
                    <div className='row'>
                      <div className='col'>
                        <h5 className="card-title"><GroupAddIcon className='icon fs-2' /></h5>
                        <h4 className="card-text">
                          <CountUp
                          start={0}
                          end={32441}
                          prefix='+'
                          decimal='1'
                          />
                        </h4>
                        <p className="card-text text-success">New Clients</p>
                      </div>
                      <div className='col-3 mt-2'>
                        <CircularProgress determinate value={progthree} color='success' />
                        <h6 className='text-success mt-2'>+5%</h6>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className="card">
                  <div className="card-body content text-light">
                    <div className='row'>
                      <div className='col'>
                        <h5 className="card-title"><TrafficIcon className='icon fs-2' /></h5>
                        <h4 className="card-text">
                          <CountUp
                          start={0}
                          end={1325134}
                          decimal='2'
                          prefix='+'
                          />
                        </h4>
                        <p className="card-text text-success ">Traffic Received</p>
                      </div>
                      <div className='col-3 mt-2'>
                        <CircularProgress determinate value={progfour} color='success' />
                        <h6 className='text-success mt-2 card-text'>+43%</h6>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col chart text-dark card mt-5'>

              <div className='card-title'>
                <div className='row'>
                  <div className='col'>
                    <h3 className='ms-3 text-success'>
                      Revenue Generated
                    </h3>
                    <h4 className='text-light ms-5'>
                      <CountUp
                      start={0}
                      end={5934232}
                      decimal='2'
                      prefix='$'
                      />
                    </h4>
                  </div>
                  <div className='col-1 mt-4 text-success '>
                    <GetAppIcon className='fs-2' />
                  </div>
                </div>
              </div>
              <ResponsiveLine
                data={data}
                margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: true,
                  reverse: false
                }}
                theme={{
                  text: {
                    "fill": "#FFFFFF"
                  }
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'transportation',
                  legendOffset: 36,
                  legendPosition: 'middle'
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'count',
                  legendOffset: -40,
                  legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]}
              />
            </div>
            <div className='row mt-5' >
              <div className='col'>
                <div className='card content cardie align-items-center'>
                  <h5 className='card-title text-light mt-4 mb-4 me-auto' > <u>Campaign </u></h5>
                  <CircularProgress determinate value={progress} color='success' size='lg' />
                  <h5 className='card-title text-success'>
                    <CountUp
                    start={0}
                    end={48395}
                    decimal='1'
                    prefix='$'
                    /> Revenue Generated</h5>
                  <h6 className='text-light'>Includes Extra Misc Expenditure and Costs</h6>

                </div>
              </div>
              <div className='col'>
                <div className='card content cardie align-items-center'>
                  <h5 className='card-title text-light mt-4 mb-4 me-auto' > <u>Sales Quantity </u></h5>
                  <ResponsiveBar
                    data={bardat}
                    keys={[
                      'hot dog',
                      'burger',
                      'sandwich',
                      'kebab',
                      'fries',
                      'donut'
                    ]}
                    indexBy="country"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'set3' }}
                    theme={{
                      text: {
                        "fill": "#FFFFFF"
                      }
                    }}
                    defs={[
                      {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                      },
                      {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                      }
                    ]}
                    fill={[
                      {
                        match: {
                          id: 'fries'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'sandwich'
                        },
                        id: 'lines'
                      }
                    ]}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'country',
                      legendPosition: 'middle',
                      legendOffset: 32,
                      truncateTickAt: 0
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'food',
                      legendPosition: 'middle',
                      legendOffset: -40,
                      truncateTickAt: 0
                    }}
                    enableLabel={false}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    legends={[
                      {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemOpacity: 1
                            }
                          }
                        ]
                      }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                  />

                </div>
              </div>
              <div className='col'>
                <div className='card content cardie align-items-center'>
                  <h5 className='card-title text-light mt-4 mb-4 me-auto' > <u>Geography Based Traffic</u></h5>
                  <div className="world">
                    <VectorMap
                      map={worldMill}
                      className='vector'
                      backgroundColor='none'
                      style={{
                        width: "20rem",
                        height: "11rem",
                        marginLeft: "4.5rem",
                        marginTop: "3rem",

                      }}
                      series={{
                        regions: [
                          {
                            values: world,
                            attribute: 'fill',
                            scale: colorscale,
                          }
                        ]
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Dashboard