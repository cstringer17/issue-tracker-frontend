import {useEffect, useState} from "react";
import api from '../../api'

export default function IssueView({issueId}) {
  const [issue, setIssue] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const user = (await api.get(`/issues/${issueId}`)).data;
        console.log(user)
        setIssue(user);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUser();
  }, [issueId]);

  return (
    <>
      <div>
        <h1>Your Issue:</h1>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured</p>}
        <p>{issue && issue.name}</p>
      </div>
    </>
  );
}
