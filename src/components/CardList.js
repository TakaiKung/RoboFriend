import Card from './Card';
import { robots } from '../data/robots';

const CardList = () => {

    return ( 
        <>
            {
                robots.map(robot => {
                    return  <Card 
                                name={ robot.name }
                                email={ robot.email }
                                key={ robot.id }
                            /> 
                })
            }
         
        </>
    );
}
 
export default CardList;