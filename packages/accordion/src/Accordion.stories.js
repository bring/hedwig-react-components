import React from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'

export default {
    title: 'Components/Accordion',
    component: Accordion
}

const item1 = () => (
    <AccordionItem title='Hva er hentefristen?'>
        <p>
            Fristen for å hente pakker og andre sendinger på postkontorene er 14
            dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen
            returnert til avsender.
        </p>
    </AccordionItem>
)
const item2 = () => (
    <AccordionItem
        title='Hvordan finner jeg hvilket hentested som tilhører min adresse?'
        expanded
    >
        <p>
            I vårt Adressesøk kan du finne hvilket hentested som er knyttet til
            adressen din. I søket får du listet opp alle adressene inkludert
            husnummer og tilhørende postnummer. Holder du markøren over adressen
            vil du se hentested (for pakker og store sendinger). Du kan ved å
            klikke på husnummeret gå til kartløsningen, som vil vise deg mer
            informasjon om hentestedet.
        </p>
    </AccordionItem>
)

const Template = (args) => (
    <Accordion {...args}>
        {item1()}
        {item2()}
    </Accordion>
)
export const Default = Template.bind({})

Default.args = {
    allowMultiple: true
}
