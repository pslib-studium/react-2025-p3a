import { type FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type UserRouteParams = {
  id: string;
};

export const UserPage: FC = () => {
  const { id } = useParams<UserRouteParams>();
  const nav = useNavigate();
  useEffect(() => {
    if (id === "14") {
      nav("/search/special-user-14", { replace: true });
    }
  }, [id]);

  return (
    <div>
      <h1>User detail</h1>
      <p>Parametr <code>id</code>: {id}</p>
    </div>
  );
};

export default UserPage;