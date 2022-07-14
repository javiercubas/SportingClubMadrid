import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import './Estadisticas.css'
import { auth, db, logout } from "../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Estadisticas() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/login");

        fetchUserName();
    }, [user, loading]);
    let contador = 0;
    let i = 0;
    let nombre;
    let apellido;
    if (name.length > 0) {
        while (contador == 0 || i < name.length) {
            if (name.charAt(i) == " ") contador++;
            i++
        }
        if (contador != 0) {
            nombre = name.split(" ")[0];
            apellido = name.split(" ")[1];
        }
    }

    return (
        <div className='stats'>
            <div className='bg-stats'>
                <img className='badge-bg-stats' src='http://assets.stickpng.com/images/584a9b47b080d7616d298778.png' />
            </div>
            <div className='player-stats'>
                <img className='image-player-stats' src='https://www.footyrenders.com/render/carlo-ancelotti-5.png' />
                <div className='content-player-stats'>
                    <div className='side-content-player-stats'>
                        <div className='name-content-player-stats'>
                            {nombre}
                            <div className='surname-content-player-stats'>{apellido}</div>
                            <div className='dorsal-content-player-stats'>7</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
