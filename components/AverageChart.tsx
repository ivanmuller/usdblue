import { ResponsiveLine } from '@nivo/line'
import { ChartWrapStyled } from 'styles/Chart'

const dataForChart = [
  {
    "id": "buy_price",
    "color": "#4C4D86",
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
    "id": "sell_price",
    "color": "#820263",
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
        colors={['#4C4D86', '#820263']}
        colorBy="index"
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#222"
              }
            }
          },
          grid: {
            line: {
              stroke: "rgba(255,255,255,0.5)"
            }
          }
        }}
        enablePoints={false}
        enableArea={true}
        areaOpacity={0.05}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
        motionConfig="stiff"
      />
    </ChartWrapStyled>
  )
}