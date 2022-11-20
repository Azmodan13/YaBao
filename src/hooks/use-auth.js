import { useSelector } from 'react-redux'

export function useAuth() {
    const { email, name, phone, token, id } = useSelector((state) => state.user)

    return {
        isAuth: !!email,
        email,
        name,
        phone,
        token,
        id,
    }
}
