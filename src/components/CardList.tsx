import React from "react";
import { Robot } from "../containers/App";
import Card from "./Card";

type CardListProps = {
    robots: Robot[];
}

const CardList = ({ robots }: CardListProps) => {
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            robot={robot}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;