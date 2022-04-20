import { ResponsiveLine } from '@nivo/line'
import { ChartWrapStyled } from 'styles/Chart'

const tooltipsColors = {
  '#333591': '#4C4D86',
  '#f308b8' : '#820263'
}

const dataForChart = [
  {
    "id": "Buying at",
    "color": "#333591",
    "data": [
      {
        "x": "",
        "y": 195
      },
      {
        "x": "Mon",
        "y": 195
      },
      {
        "x": "Tue",
        "y": 196
      },
      {
        "x": "Wed",
        "y": 198
      },
      {
        "x": "Thu",
        "y": 200
      },
      {
        "x": "Fri",
        "y": 191
      },
      {
        "x": "TODAY",
        "y": 191
      },
      {
        "x": ".",
        "y": 191
      }
    ]
  },
  {
    "id": "Selling at",
    "color": "#f308b8",
    "data": [
      {
        "x": "",
        "y": 197
      },
      {
        "x": "Mon",
        "y": 197
      },
      {
        "x": "Tue",
        "y": 198
      },
      {
        "x": "Wed",
        "y": 200
      },
      {
        "x": "Thu",
        "y": 202
      },
      {
        "x": "Fri",
        "y": 193
      },
      {
        "x": "TODAY",
        "y": 193
      },
      {
        "x": ".",
        "y": 193
      }
    ]
  }
]

export const AverageChart = () => {

  return (
    <ChartWrapStyled>
      <ResponsiveLine
        data={dataForChart}
        curve="monotoneX"
        margin={{ top: 1, right: 0, bottom: 50, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 0,
          tickPadding: 20,
          legend: '',
          legendOffset: 27,
          legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={d => d.color}
        colorBy="index"
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#222",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "1.2rem"
              }
            }
          },
          grid: {
            line: {
              stroke: "rgba(255,255,255,0.5)"
            }
          }
        }}
        lineWidth={0}
        enablePoints={false}
        enableArea={true}
        areaOpacity={0.15}
        enableSlices="x"
        crosshairType="cross"
        useMesh={true}
        legends={[]}
        motionConfig="stiff"
        sliceTooltip={({ slice }) => (
            <div style={{
                background: 'white',
                padding: '1rem'
              }}>
              {slice.points.map(point => (                  
                  <div
                    key={point.id}
                    style={{
                      color: tooltipsColors[point.color],
                      padding: '2px'
                    }}
                  >
                    {point.serieId} <strong>{point.data.yFormatted}</strong>
                  </div>
                )
            )}
            </div>
          )
        }
      />
    </ChartWrapStyled>
  )
}