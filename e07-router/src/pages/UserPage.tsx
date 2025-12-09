import { type FC } from "react";
import { useParams, redirect, type LoaderFunctionArgs } from "react-router-dom";

type UserRouteParams = {
  id: string;
};

// Loader funkce
export async function userLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  
  if (id === "14") {
    return redirect("/search/special-user-14");
  }
  
  // volání API ...
  
  return { id };
}

export const UserPage: FC = () => {
  const { id } = useParams<UserRouteParams>();
  // Pokud bychom vracel data z loaderu:
  // const { user } = useLoaderData<typeof userLoader>();

  return (
    <div>
      <h1>User detail</h1>
      <p>Parametr <code>id</code>: {id}</p>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        💡 Tip: Zkuste <code>/user/14</code> pro redirect demo
      </p>
    </div>
  );
};

export default UserPage;