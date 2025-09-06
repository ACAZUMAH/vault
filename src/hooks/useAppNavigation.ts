import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useAppNavigation = (route: string) => {
    const navigate = useNavigate()

    return useCallback(() => { navigate(route) }, [navigate, route])
}