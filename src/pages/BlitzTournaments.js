import React from 'react';
import './BlitzTournaments.css';
export default function BlitzTournaments() {
  return (
    <div className='blitz-tournaments'>
        <div className='content-blitz-tournaments'>
            <h2 className='title-content-blitz-tournaments'>Buscador de torneos relámpagos</h2>
            <form className='form-content-blitz-tournaments'>
                <select classname='select-form-content-blitz-tournaments'>
                    <option value=''></option>
                </select>
            </form>
        </div>
    </div>
  )
}