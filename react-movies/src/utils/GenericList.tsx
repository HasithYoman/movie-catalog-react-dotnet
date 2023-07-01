import { ReactElement } from "react";
import Loading from "./Loading";

function GenericList(props: GenericListProps){
    if(!props.list){
        if(props.lodingUI){
            return props.lodingUI;
        }
        return<Loading/>
    }else if(props.list.length ===0){
        if(props.emptyListUI){
            return props.emptyListUI;
        }
        return <>There are no eliment to display</>
    }else{
            return props.children;
    }
}

export default GenericList

interface GenericListProps{
    list: any;
    lodingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}