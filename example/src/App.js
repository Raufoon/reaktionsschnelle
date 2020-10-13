import React from 'react'
import Reaktionsschnelle from 'reaktionsschnelle'
 
function App() {
  return <>
    <Reaktionsschnelle screens={['M', 'L']}>
      <div>Your screen is medium or large</div> 
    </Reaktionsschnelle>
 
    <Reaktionsschnelle screens={['S']}>
      <div>Your screen is small</div>
    </Reaktionsschnelle>
 
    <Reaktionsschnelle minWidth={500}>
      <div>Your screen is <= 500px</div>
    </Reaktionsschnelle>
 
    <Reaktionsschnelle maxWidth={300}>
      <div>Your screen is > 300px</div>
    </Reaktionsschnelle>
 
    <Reaktionsschnelle minWidth={800} maxWidth={1000}>
      <div>Your screen is <= 800px and < 1000px</div>
    </Reaktionsschnelle>
  </>
}
 
export default App
