// const API_KEY = "7b943276";

//варинат с дебаунс функцией из библиотеки lodash
// export const getMovies = async (query) => {
//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
//     );
//     // console.log(responce);
//     if (!response.ok) {
//       throw new Error("Ошибка ответа с сервера");
//     }
//  const data=await response.json();
//  if (data.Response==="False") {
//     throw new Error("Не смогли найти фильмы 😢");
//  };//кейс если пришло слишком много фильмов(ограничение Api)
//  return data;
//   } catch (error) {
//     alert(error);
//   }
// };

//abbortcontroler





// export const getMovies = async (
//   query,
//   controller,
//   setisLoading,
//   setIsError
// ) => {
//   try {
//     setisLoading(true);
//     setIsError(false);
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
//       {
//         signal: controller.signal,
//       }
//     );
//     // console.log(responce);
//     if (!response.ok) {
//       throw new Error("Ошибка ответа с сервера");
//     }
//     const data = await response.json();
//     setisLoading(false); //как только мы получили запросы ,мы прерываем прoцес loading
//     if (data.Response === "False") {
//       throw new Error("Не смогли найти фильмы 😢");
//     } //кейс если пришло слишком много фильмов(ограничение Api)
//     return data;
//   } catch (error) {
//     if (error.name === "AbbortError") {
//       console.log("Предыдущий запрос отменен");
//     } else {
//       setIsError(true);
//     }
//   }
// };//старый вариант getMobvies

export const getMovies = async (
  query,
  controller
) => {
  try {
    const response = await fetch(
      `/api?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`,
      {
        signal: controller.signal,
      }
    );
    // console.log(responce);
    if (!response.ok) {
      throw new Error("Ошибка ответа с сервера");
    }
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error("Не смогли найти фильмы 😢");
    } //кейс если пришло слишком много фильмов(ограничение Api)
    return data;
  } catch (error) {
    if (error.name === "AbbortError") {
      console.log("Предыдущий запрос отменен");
    }
  }
};

