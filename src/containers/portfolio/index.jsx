import React, { useState } from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/Aviation.png';
import ImageTwo from '../../images/Crossingcity.png';
import ImageThree from '../../images/GunsAndAliens.png';
import './style.scss';

const projects = [
    {
        id: 2,
        name: 'Guns And Aliens Mobile Game',
        image: ImageThree,
        link: ''
    },
    {
        id: 2,
        name: 'Crossing City Mobile Game',
        image: ImageTwo,
        link: ''
    },
    {
        id: 3,
        name: 'Aviation Website',
        image: ImageOne,
        link: ''
    }
]

const filterData = [
    {
        filterID: 1,
        label: 'All'
    },
    {
        filterID: 2,
        label: 'Games'
    },
    {
        filterID: 3,
        label: 'Websites'
    }
]


const Portfolio = () => {

    const [filterValue, setFilter] = useState(1);

    const [hoverValue, setHoverValue] = useState(null);

    function handleFilter(currentId) {
        setFilter(currentId)
    }

    console.log(filterValue);

    const filterItems = filterValue === 1 ? projects :
        projects.filter(item => item.id === filterValue)

    console.log(filterItems)

    function handleHover(index){
        setHoverValue(index);
    }


    return (
        <section id='portfolio' className='portfolio'>
            <PageHeader
                headerText="Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='portfolio_content'>
                <ul className='portfolio_content_filter'>
                    {
                        filterData.map((item) => (
                            <li className={item.filterID === filterValue ? 'active' : ''} onClick={() => handleFilter(item.filterID)} key={item.filterID}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='portfolio_content_cards'>
                    {
                        filterItems.map((item, i) => (
                            <div className='portfolio_content_cards_item' key={`cardItem${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(i)}
                                onMouseLeave={()=>handleHover(null)}
                            >
                                <div className='portfolio_content_cards_item_imgWrap'>
                                    <a>
                                        <img src={item.image} alt="dummy data" />
                                    </a>
                                    <div className='overlay'>
                                        {
                                            i===hoverValue && (
                                                <div>
                                                    <p>{item.name}</p>
                                                    <button>Visit Site</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Portfolio;