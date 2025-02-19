import React from 'react'
import PartsBlog from './PartsBlog'
import persons1 from "./../../images/image_1.jpg.webp"
import persons2 from "./../../images/image_2.jpg.webp"
import persons3 from "./../../images/image_3.jpg.webp"
import persons4 from "./../../images/image_4.jpg.webp"
import persons5 from "./../../images/image_5.jpg.webp"
import persons6 from "./../../images/image_6.jpg.webp"




export default function blog() {
  return <>
  <div className="container" id='Blog'>
    <div className="row g-5">
       <PartsBlog imge={persons1} />
       <PartsBlog imge={persons2} />
       <PartsBlog imge={persons3} />
       <PartsBlog imge={persons4} />
       <PartsBlog imge={persons5} />
       <PartsBlog imge={persons6} /> 
        </div>
    </div>
  <br />
  </>
}
