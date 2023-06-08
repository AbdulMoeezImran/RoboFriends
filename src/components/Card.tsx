import React from "react";
import { Robot } from "../containers/App";


type CardProps = {
    robot: Robot;
}

const Card = ({robot}: CardProps) =>{
    const {name, email, id} = robot;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="robots" src={`https://robohash.org/${id}`} height={200} width={200} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card;