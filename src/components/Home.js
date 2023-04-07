import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { MdDelete } from 'react-icons/md';

const Home = () => {
    const date = new Date()
    const ctimedate = date.toLocaleString()
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({
        name:"",
        ctd:ctimedate
    })

    const loadNotes = async ()=>{
        const result = await axios.get('http://localhost:3003/notes')
        setNotes(result.data)
    }
    const onInputChnage=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    const onSubmit= async (e)=>{
        e.preventDefault()
        await axios.post(`http://localhost:3003/notes`, note)
        loadNotes()
    }
    const deleteNote = async (id)=>{
        await axios.delete(`http://localhost:3003/notes/${id}`)
        loadNotes()
    }
    useEffect(()=>{
        loadNotes()
    },[])
  return (
    <div>

    <div className="container my-4">
        <form onSubmit={e=>onSubmit(e)}>
        <div className="mb-3">
            <input placeholder='Take a Note...' name="name" value={note.name} onChange={e=>onInputChnage(e)} type="text" className="form-control" id="exampleInputEmail1"/>
        </div>
        <button className="btn btn-primary">Add Note</button>
        </form>
    </div>
      <div className="container">
        <div className="py-4">
            <div className="">
                <div className="d-flex flex-wrap justify-content-start">
                        {notes.map((note)=>{
                            return (
                                <div key={note.id} className="note-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">{note.name}</p>
                                            <p>{note.ctd}</p>
                                            <div className="text-end"><button className="btn p-0" onClick={()=>deleteNote(note.id)}><MdDelete style={{fontSize:"20px"}}/></button></div>
                                        </div>
                                    </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
