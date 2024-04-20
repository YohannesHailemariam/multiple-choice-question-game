import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function McqPage() {
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=10');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchData();
    }, [])

  return (
    <div>
        <p></p>
    </div>
  )
}

export default McqPage