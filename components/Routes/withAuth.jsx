import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function withAuth(Component) {
    return function ProtectedRoute({ admindata, ...props }) {
        const router = useRouter()

        useEffect(() => {
            if (admindata === null || admindata.role !== 'admin') {
                router.push('/login')
            }
        }, [admindata])

        return <Component {...props} />
    }
}