import { useRouter } from 'next/router'
import React from 'react'

const pageNo = () => {
    const router = useRouter();
    const pageno=router.query.pageNo;
    
  return (
    <div>
      <h1>My content no {pageno}</h1>
    </div>
  )
}

export default pageNo;
