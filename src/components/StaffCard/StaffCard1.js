import React, { Fragment } from "react";
import './StaffCard.css';
export default function StaffCard(props){
    return(<Fragment>
        <div class="div__grid__card">
            <div class="card__person">
                <h3 class="person__title">{props.name}</h3>
                <div class="person__photo"></div>
                <h3 class="person__task">{props.task}</h3>
            </div>
            <div class="card__info">
                <ul class="info__list">
                    {props.lista.map((task)=>(<li>{task}</li>))}
                </ul>
            </div>
        </div>
    </Fragment>);
}