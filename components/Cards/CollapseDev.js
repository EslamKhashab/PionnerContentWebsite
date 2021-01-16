
import Collapse from './Collapse';

const CollapseDev = ({list}) => {
    return (
        <div>
            {
                list && list.map((item,idx) => (
                    <Collapse title={item.tilte} answer={item.description} key={idx} />
                ))
            }
        </div>
    );
}

export default CollapseDev;

