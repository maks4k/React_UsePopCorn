//запрос на то ч то бы отоброзить подробное инфо о фильме
export const getMovieDescription = async (id) => {
      const response = await fetch(
        `/api?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`,
      );
      // console.log(responce);
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error("Не смогли найти этот фильм 😢");
      } //кейс если пришло слишком много фильмов(ограничение Api)
      return data;
  };
  