'use client' // Add this line to specify this as a Client Component

import { fetchData } from '@/utils/api'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [response, setResponse] = useState(null)

  const getData = async () => {
    try {
      const result: any = await fetchData('/farm', {
        method: 'GET',
      })
      setResponse(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  console.log('😎✨ ~ file: page.tsx ~ response:', response)


  return <section className="w-full flex-center flex-col">TEST</section>
}

export default Page
