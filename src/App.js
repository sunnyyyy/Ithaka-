import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './index.css';

function App() {
 const style1= {
   padding:"50px",
   fontFamily:'EB Garamond',
  fontSize: '20pt'
  }
  return (
    <div style={style1}>
      <Accordion>
        <AccordionSummary          
        >
         As you set out for Ithaka
        </AccordionSummary>
        <AccordionDetails>
          
          hope your road is a long one,
          
        </AccordionDetails>
        <Accordion>
        <AccordionSummary
        >
          full of adventure, full of discovery.
        </AccordionSummary>
        <AccordionDetails>
          Laistrygonians, Cyclops, angry Poseidon—don’t be afraid of them:
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
          you’ll never find things like that on your way
        </AccordionSummary>
        <AccordionDetails>
          <p>as long as you keep your thoughts raised high,</p>
          <p>as long as a rare excitement</p>
          <p>stirs your spirit and your body.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
          Laistrygonians, Cyclops,
        </AccordionSummary>
        <AccordionDetails>
         <p> wild Poseidon—you won’t encounter them</p>
         <p>unless you bring them along inside your soul,</p>
         <p>unless your soul sets them up in front of you.</p>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
        >
        Hope your road is a long one.
        </AccordionSummary>
        <AccordionDetails>
          <p> May there be many summer mornings when,</p>
         <p>with what pleasure, what joy,</p>
         <p>you enter harbors you’re seeing for the first time;</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
        may you stop at Phoenician trading stations
        </AccordionSummary>
        <AccordionDetails>
          <p> to buy fine things,</p>
         <p>mother of pearl and coral, amber and ebony,</p>
         <p>sensual perfume of every kind—</p>
         <p>as many sensual perfumes as you can;</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
         and may you visit many Egyptian cities
        </AccordionSummary>
        <AccordionDetails>
          to learn and go on learning from their scholars.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
         Keep Ithaka always in your mind.
        </AccordionSummary>
        <AccordionDetails>
         <p> Arriving there is what you’re destined for.</p>
          <p>But don’t hurry the journey at all.</p>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
        Better if it lasts for years,
        </AccordionSummary>
        <AccordionDetails>
          <p>so you’re old by the time you reach the island,</p>
          <p>wealthy with all you’ve gained on the way,</p>
          <p>not expecting Ithaka to make you rich.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
         Ithaka gave you the marvelous journey.
        </AccordionSummary>
        <AccordionDetails>
          <p>Without her you wouldn't have set out.</p>
          <p>She has nothing left to give you now.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
        And if you find her poor, Ithaka won’t have fooled you.
        </AccordionSummary>
        <AccordionDetails>
          <p>Wise as you will have become, so full of experience,</p>
          <p>you’ll have understood by then what these Ithakas mean.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
        Ithaka BY C. P. CAVAFY
        </AccordionSummary>
        <AccordionDetails>
          Happy Birthday :)
        </AccordionDetails>
      </Accordion>
      
      </Accordion>
     
     
    </div>
  );
}

export default App;
