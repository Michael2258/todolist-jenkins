import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../services/queries";
import { handleGetNotes } from "../apis/queries";
import { handleCreateNotes } from "../apis/mutations";

const Todos = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: [QUERY_KEY.GET_NOTES],
    queryFn: handleGetNotes,
  });

  const { mutate, reset } = useMutation({
    mutationFn: handleCreateNotes,
  });

  if (isPending) return <h2>Loading...</h2>;

  if (isError) return <h1>ERROR!!! {error.message}</h1>;

  return (
    <div>
      <button onClick={() => mutate({ id: "1", title: "Hello Good morning" })}>
        Add
      </button>

      <button onClick={reset}>Clear All</button>

      <ul>
        {data.map((t: { id: string; title: string }) => (
          <li key={t?.id}>{t?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
