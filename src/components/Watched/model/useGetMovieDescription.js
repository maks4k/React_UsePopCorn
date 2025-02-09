import { useEffect, useState } from "react";
import { getMovieDescription } from "../api";


export function useGetMovieDescription(id){
    const [description, setDescription] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
      const [error,setError]=useState("");
      useEffect(() => {
        setIsLoading(true);
        getMovieDescription(id).then((data) => {
          if (data.response==="False") {
          throw new Error("Не смогли найти описания фильма 😢");
          }
          setDescription(data);
          setIsLoading(false);
        }).catch((err)=>{
          setError(err.message)
        })
      }, [id])
      
      return {description,isLoading,errorMsg:error}
    }