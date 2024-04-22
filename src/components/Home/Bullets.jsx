import { useEffect, useState } from 'react'

export function Bullets (props) {
  const { number, duration, simbol } = props

  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const [count, setCount] = useState('0')

  useEffect(() => {
    let start = 0
    const end = parseInt(number.substring(0, 3))
    if (start === end) return
    const totalMilSecDur = parseInt(duration)
    const incrementTime = (totalMilSecDur / end) * 1000
    const timer = setInterval(() => {
      start += 1
      const formattedCount = formatNumberWithCommas(start) + number.substring(3)
      setCount(formattedCount)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [number, duration])

  return (
    <div className='text-center'>
      <span className='fw-bold fs-1 title-reasons'>{formatNumberWithCommas(count)} {simbol}</span>
    </div>
  )
}
