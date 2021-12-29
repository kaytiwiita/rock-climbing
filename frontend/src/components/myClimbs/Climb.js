import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClimb } from "../../actions/climbs.action";

function Climb({ climb }) {
    const climbers = useSelector(state => state.climbers);

    const [currentClimber, setCurrentClimber] = useState(climbers[0]);
    const [listedClimb, setListedClimb] = useState(climb);
    let [attempts, setAttempts] = useState(climb.attempts);

    const dispatch = useDispatch();

    function handleIncrease() {
        attempts = attempts + 1;
        setAttempts(attempts);
        updateClimbCount();
    };

    function handleDecrease() {
        attempts = attempts - 1;
        setAttempts(attempts);
        updateClimbCount();
    };

    function updateClimbCount() {
        const newClimb = {
            ...listedClimb,
            attempts,
        };

        dispatch(updateClimb({
            id: climb.routeId,
            climb: newClimb,
            climber: currentClimber,
        }));

        setListedClimb(newClimb);
    }

    return(
        <tr key={listedClimb.routeId}>
            <td>{listedClimb.routeId}</td>
            <td>{listedClimb.routeType}</td>
            <td>{listedClimb.routeGrade.gradeLevel}</td>
            <td>{listedClimb.gym.name}</td>
            <td>
                <button onClick={handleIncrease}>+</button>
                {listedClimb.attempts}
                <button onClick={handleDecrease}>-</button>
            </td>
        </tr>
    );
}

export default Climb;