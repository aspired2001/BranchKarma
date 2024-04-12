
import Benefits from './Benefits'
import Carreers from './Carreers'
import Company from './Company'
import ContactCards from './ContactComponent'

import Suppliers from './Suppliers'

function HomePage() {


    return (
        <div className=' m-0 p-0 overflow-x-hidden bg-black '>
            
            <Company />
            <Carreers />
            <Benefits />
            <ContactCards />
            <Suppliers />
        </div>
    )
}

export default HomePage;