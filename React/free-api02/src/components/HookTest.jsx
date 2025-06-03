import React from 'react'
import useGetQuotes from '../hooks/useGetQuotes'

function HookTest() {
    const [se, setQuotes] = useGetQuotes();
    console.log(se);
    
  return (
    <div>
      Something is here
    </div>
  )
}

export default HookTest
