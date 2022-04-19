import React from 'react'
import { Text } from 'styles/Layout'
import { AverageStyled } from 'styles/Average'
import { ResponsiveLine } from '@nivo/line'

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

const AverageChart = ({ props }) => {
  return (
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
      enablePoints={false}
      enableArea={true}
      areaOpacity={0.05}
      enableCrosshair={false}
      useMesh={true}
      legends={[]}
      motionConfig="stiff"
    />
  )
}

export const Average = ({ averages, lastUpdate }) => {
  const today = lastUpdate ? new Date(lastUpdate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""

  return (
    <AverageStyled>
      <Text {...{ 'as': 'h2', 'fs': 'lg', 'fw': '900' }}>USD BLUE <Text {...{ 'as': 'span', 'fs': 'sm' }}>Price Average</Text></Text>
      <div>
        <Text {...{ 'as': 'p', 'fs': 'md', 'color': 'brand1' }}>
          Buying at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_buy_price : '...'}</Text>
        </Text>
        <Text {...{ 'as': 'p', 'fs': 'md', 'color': 'brand2' }}>
          Selling at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_sell_price : '...'}</Text>
        </Text>
      </div>
      <div style={{ height: '200px', width: '100%' }}>
        <AverageChart />
      </div>
      <div className="date"><span suppressHydrationWarning={true}>{today && <>Last Update: {today}hs</>}</span></div>
    </AverageStyled>
  )
}