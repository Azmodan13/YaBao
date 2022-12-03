import './ProfileForm.scss'
import Btn from '../Btn/Btn'
import { useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { removeUser } from '../../Redux/slice/userSlice'
import { clearItem } from '../../Redux/slice/cartSlice'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { storage } from '../../services/firebaseConfig'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import ava from '../../Assets/ico/social/ava.png'
import { setUser } from '../../Redux/slice/userSlice'

export default function ProfileForm() {
    const user = useSelector((state) => state.persistedReducer.user)
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState(user.name ? user.name : '')
    const [inputNumber, setInputNumber] = useState(user.phone ? user.phone : '')
    const [inputEmail, setInputEmail] = useState(user.email ? user.email : '')

    const filePicker = useRef(null)

    const [imageUpload, setImageUpload] = useState(null)
    const [imagelist, setImageList] = useState([])
    const imageRef = ref(storage, `${inputEmail}`)

    const uploadImage = (event) => {
        if (imageUpload == null) return
        const imageRef = ref(storage, `${inputEmail}/avatar`)
        uploadBytes(imageRef, imageUpload).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url)=> {
                setImageList((prev) => [...prev, url])
            })
            
        })
    }

    useEffect(() => {
        listAll(imageRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
        if(imageUpload !== null){uploadImage()}
    }, [imageUpload])

    const handlerClick = (event) => {
        dispatch(removeUser())
        dispatch(clearItem())
    }

    async function handleSave(inputName, inputNumber, inputEmail) {
        console.log('click',inputName ,inputEmail,inputNumber)
        try {
            await updateDoc(doc(db, 'users', inputEmail), {
                name: inputName,
                phone: inputNumber,
            })
        } catch (e) {
            console.error('Error adding document: ', e)
        }
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: inputName,
            phone: inputNumber,
        }));
    }

    const handlePick = () => {
        filePicker.current.click()
    }
    function onsubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="profile">
            <h1 className="profile__title">Особисті данні</h1>
            <div  className="profile__form">
                <div className="profile__img" style={{ background: `url(${ava}) center` }}>
                    {imagelist ? <img src={imagelist} /> : ''}
                </div>
                <input
                    id="hidden"
                    type="file"
                    accept="image/*, .png, .jpg"
                    ref={filePicker}
                    onChange={(event) => {
                        setImageUpload(event.target.files[0])
                    }}
                />
                <Btn btnText="Завантажити фото" btnWidth="200px" handelClick={handlePick} />
                <label htmlFor="name">Ім'я</label>
                <input
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    required
                    type="text"
                    name="name"
                />
                <label htmlFor="number">Номер телефона</label>
                <input
                    id="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    required
                    type="number"
                    name="number"
                />
                <label htmlFor="email"> Ваш e-mail </label>
                <input
                    id="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    required
                    disabled={true}
                    type="email"
                    name="email"
                />

                <div  className="profile__btn">
                    <Btn handelClick={() => handleSave(inputName, inputNumber, inputEmail)} btnText="Зберегти" />

                    <Link to="/">
                        <Btn btnText="Вийти" handelClick={(event) => handlerClick(event)} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
