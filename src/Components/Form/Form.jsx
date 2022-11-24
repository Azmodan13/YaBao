import './Form.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Form({ title, submit, footer, link, handelClick, error }) {
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onsubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="overlay">
                <div className="modal__login">
                    <h1 className="modal__login__title">{title}</h1>
                    <form onSubmit={onsubmit}>
                        <label htmlFor="email"> Ваш e-mail </label>
                        <input
                            id="email"
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"> Ваш пароль </label>
                        <input
                            id="password"
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error ? <p className='error' >Невірний email або пароль</p> : ''}
                        <button
                            className="btn"
                            onClick={() => handelClick(email, password)}
                            style={{ width: '225px', height: '55px' }}
                        >
                            {submit}
                        </button>
                    </form>
                    <p className='link'>
                        <Link to={link}>{footer}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

// import './Form.scss'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// export default function Form({ title, submit, footer, link, handelClick }) {
//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//     } = useForm()

//     function onsubmit(data) {
//         console.log(data)
//     }

//     return (
//         <div className="container">
//             <div className="overlay">
//                 <div className="modal__login">
//                     <h1 className="modal__login__title">{title}</h1>
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <label>
//                             Ваш e-mail
//                             <input
//                                 {...register('email', { required: 'Email Address is required' })}
//                                 aria-invalid={errors.email ? 'true' : 'false'}
//                             />
//                         </label>
//                         {errors.mail && <p role="alert">{errors.mail?.message}</p>}
//                         <label>
//                             Ваш пароль
//                             <input
//                                 {...register('password', { required: 'password is required' })}
//                                 aria-invalid={errors.password ? 'true' : 'false'}
//                             />
//                         </label>
//                         {errors.password && <p role="alert">{errors.password?.message}</p>}
//                         <button className="btn" style={{ width: '225px', height: '55px' }}>
//                             {submit}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
