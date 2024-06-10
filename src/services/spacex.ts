import { type Doc, type APISpaceXResponsee } from "../types/api.ts";


export const getLatestLaunchByID = async ({id}: { id: string}) => {
  // En los --- se pueden ejecutar los javascript
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`,) 

  const launch = (await res.json()) as Doc;

  // console.log(launch);
  return launch;
};


export const getLatestLaunches = async () => {
  // En los --- se pueden ejecutar los javascript
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc", 
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as APISpaceXResponsee;
  return launches;
};
