import { change } from "@/store/specifations";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePostState = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.specification.value);
    useEffect(() => {
    }, [])
    const updateState = (data: any) => {
        try {
            const parsedData = JSON.stringify(data);
            localStorage.setItem("data", parsedData);
            dispatch(change({ men: state.men, women: state.women, data: data }));
        } catch (error) {
            console.log(error);
        }
    };

    return { updateState };
};

export default usePostState;
