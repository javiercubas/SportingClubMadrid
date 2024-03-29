import React, { Fragment, useState, useEffect } from "react";
import './StaffCard.css';
export default function StaffCard(props) {
    const url = 'https://clever-neumann.82-223-205-248.plesk.page/api/staffs/' + props.id + '?populate=%2A'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data.attributes.Avatar.data.attributes.url)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    if (props.type == 1)
        return (<Fragment>
            <div class="div__grid__card">
                <div class="card__person">
                    <h3 class="person__title">{props.name}</h3>
                    <div className="person__right">
                        <div class="person__photo" style={{ backgroundImage: 'url(https://clever-neumann.82-223-205-248.plesk.page' + todos + ')' }}></div>
                        <h3 class="person__task">{props.task}</h3>
                    </div>
                </div>
                <div class="card__info">
                    <ul class="info__list">
                        {props.lista.map((task) => (<li>{task}</li>))}
                    </ul>
                </div>
            </div>
        </Fragment>);
    else
        return (<Fragment>
            <div class="div__grid__card">
                <div class="card__info2">
                    <ul class="info__list">
                        {props.lista.map((task) => (<li>{task}</li>))}
                    </ul>
                </div>
                <div class="card__person">
                    <h3 class="person__title">{props.name}</h3>
                    <div className="person__right">
                        <div class="person__photo" style={{ backgroundImage: 'url(https://clever-neumann.82-223-205-248.plesk.page' + todos + ')' }}></div>
                        <h3 class="person__task">{props.task}</h3>
                    </div>
                </div>
            </div>
        </Fragment>);
}