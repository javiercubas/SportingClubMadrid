import './ClubStaff.css';
import { useEffect, useState } from 'react';
import StaffCard from '../components/StaffCard/StaffCard';

export default function ClubStaff() {
    const url = 'http://127.0.0.1:1337/api/type-staffs?populate[staff][populate][0]=position_staff'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div class="clubStaff">
            {!todos ? 'Cargando...' :
                todos.map((type_staff, index) => {
                    const staff = type_staff.attributes.staff.data.map((staff, index) => {
                        let palabra = "";
                        let array = [];
                        for (let i = 0; i < staff.attributes.Records.length; i++) {
                            if (staff.attributes.Records[i] != "\n") {
                                palabra = palabra + staff.attributes.Records[i]
                            }
                            else {
                                array.push(palabra)
                                palabra = ""
                            }

                            if (i == staff.attributes.Records.length - 1) {
                                array.push(palabra)
                            }
                        }
                        let type
                        if(index % 2 == 0) type=1;
                        else type=2;
                        return (
                            <StaffCard
                                name={staff.attributes.Name}
                                id={staff.id}
                                task={staff.attributes.position_staff.data.attributes.Position}
                                type={type}
                                lista={array.map((list, index) => {
                                    return list;
                                }
                                )} />
                        )
                    })

                    return (
                        <div class="clubStaff__div">
                            <h2 className='div__title'>{type_staff.attributes.Type} Staff</h2>
                            <hr class="clubStaff__hr" />
                            <div class="div__grid">
                                {staff}
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}