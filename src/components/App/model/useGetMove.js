import { useEffect, useRef, useState } from "react";
import { getMovies } from "../Api";

export function useGetMovie(){
    const [numResults, setnumResults] = useState(0);//стейтовая перменная для отоброжения кол-во фильмов
  const [isLoading, setisLoading] = useState(false); //стейтавая переменная под загрузку cспинера
  const [isError, setIsError] = useState(false); //стейтовая переменная под ошибку
  const [movies, setMovies] = useState([]); //стейтовая перменная для отображения фильмов
  const [activeMovie,setIsActiveMovie]=useState (null)//стейтовая перменная для подсветки выбраного фильма и куда будет сохраняться id 
  // const [data]
  const abortController = useRef(null);



//функция работающая со строкой поиска ,аборт функция и так далее
  const searchHandler = async (value) => {
    if(!value){setIsError(false);
      setnumResults(0);
      return
    }
    else if (abortController.current) {
      abortController.current.abort();
    }
    const controler = new AbortController();
    abortController.current = controler;
    setisLoading(true);
    setIsError(false)
    const data = await getMovies(value, controler, setisLoading, setIsError);
    setisLoading(false);
    !data?setIsError(true):setIsError(false);//если не какая дата не пришла активируем ошибку
    data?.Search ? setMovies(data.Search) : setMovies([]); //обнуляем масив если data.Search пришел пустым 
    setnumResults(data?.totalResults || 0);
  };
  // Хук useEffect
  useEffect(() => {
    // Очистка функции debounce
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);
  return{
    searchHandler,numResults,isLoading,isError,movies,activeMovie,setIsActiveMovie
  }
}