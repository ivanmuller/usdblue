import settings from 'settings'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

import { ResponsiveLine } from '@nivo/line'
import { ChartWrapStyled } from 'styles/Chart'
import { buildDataForChart } from 'utilities'
import type { Average as AverageType } from 'interfaces'


export const AverageChart = () => {
  const { t } = useTranslation('common')
  
  const { data, error } = useSWR<AverageType[]>('/api/averages')
  const isLoading: boolean = !data && !error
  let streams = [];

  const stream1 = buildDataForChart(data, t('averageChart.tooltipBuy'), 'buy_price', '#333591')
  const stream2 = buildDataForChart(data, t('averageChart.tooltipSell'), 'sell_price', '#f308b8')
  streams = [stream1, stream2]
  return (
    <ChartWrapStyled>
      {data && <ResponsiveLine
        data={streams}
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
          tickSize: 0,
          tickPadding: 20,
          legend: '',
          legendOffset: 27,
          legendPosition: 'middle',
          format: (d : any) => {
            const date = new Date(d)
            let dayOfWeek = ""
            if (date instanceof Date && !isNaN(date.getTime())){
              dayOfWeek = date.toLocaleString(t('code'), { weekday: 'short' });
            }
            return dayOfWeek
          }
        }}
        enableGridX={false}
        colors={d => d.color}
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
        sliceTooltip={({ slice }) => {
          const date = new Date(slice.points[0].data.xFormatted)
          let tooltipDate = ""
          if (date instanceof Date && !isNaN(date.getTime())) {
            tooltipDate = date.toLocaleDateString()
          }
            return (
              <div style={{
                  background: 'white',
                  padding: '1rem'
                }}>
                <b>{tooltipDate}</b>
                {slice.points.map(point => (                  
                    <div
                      key={point.id}
                      style={{
                        color: settings.chart.tooltipsColors[point.color],
                        padding: '2px'
                      }}
                    > {point.serieId} <strong>{point.data.yFormatted}</strong>
                    </div>
                  )
              )}
              </div>
            )
          }
        }
      />
    }
    </ChartWrapStyled>    
  )
}