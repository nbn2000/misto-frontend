import { change } from "@/store/specifations"
import { RootState } from "@/store/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const useGetState = () => {
    const state = useSelector((state: RootState) => state.specification.value)
    const dispatch = useDispatch()
    try {
        useEffect(() => {
            const local = localStorage.getItem("data")
            const pars = local ? JSON.parse(local) : null
            dispatch(change({ men: state.men, women: state.women, data: pars }))
        }, [])

        return state
    } catch (error) {
        console.log(error);
    }
}

export default useGetState